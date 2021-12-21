import Linkify from "react-linkify/dist/components/Linkify";

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
			onClick={() => {
				window.location.href = '/note/' + props.note_id;
			}}
		>
			<h3>{props.title}</h3>
			<div className="content">
				<Linkify properties={{target: '_blank'}}>
					{props.content}
				</Linkify>
			</div>
		</div>
	</div>
}

export default Sticky;