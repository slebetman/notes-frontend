import { useEffect, useState } from 'react';
const weatherAPI = require('../api/weather');

function Header () {
	const [weather, setWeather] = useState(null);

	useEffect(async () => {
		setWeather(await weatherAPI.get());
	},[]);

	return <>
		<div id="header">
			<h1 id="title" style={{
				fontSize: '40px'
			}}>
				<a href="/" style={{
					textDecoration: 'none',
					color: 'black',
				}}>
					<span className="material-icons-outlined" style={{
						fontSize: '1.4em',
						verticalAlign: 'bottom'
					}}>
						sticky_note_2
					</span>
					NOTES
				</a>
			</h1>
			{ weather ?  
				<span id="weather">
					{weather.temperature}°C
					<img src={weather.icon} className="icon" />
				</span>
				:
				null
			}
		</div>
	</>
}

export default Header;
