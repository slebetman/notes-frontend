import Markdown from "../Markdown";

function Sticky (props) {
	return <div
		className="stickies"
		style={{ backgroundColor: props.color }}
	>
		<div className="delete-btn"
			onClick={props.onDelete}
		>
			×
		</div>
		<div className="body"
			onClick={(e) => {
				if (e.target.tagName.toLowerCase() !== 'a') {
					window.location.href = '/note/' + props.note_id;
				}
			}}
		>
			<h3>{props.title}</h3>
			<div className="content">
				<Markdown content={props.content} />
			</div>
		</div>
	</div>
}

export default Sticky;