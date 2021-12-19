function Header () {
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
		</div>
	</>
}

export default Header;
