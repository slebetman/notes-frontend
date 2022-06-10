import { useEffect, useState } from 'react';
const weatherAPI = require('../api/weather');

let intervalHandle = null;

function Header () {
	const [weather, setWeather] = useState(null);

	async function refreshWeather () {
		setWeather(await weatherAPI.get());
	}

	useEffect(() => refreshWeather(),[]);

	clearInterval(intervalHandle);
	intervalHandle = setInterval(refreshWeather, 2*60*1000);

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
					<img src={weather.icon} className="icon" alt="icon" />
				</span>
				:
				null
			}
		</div>
	</>
}

export default Header;
