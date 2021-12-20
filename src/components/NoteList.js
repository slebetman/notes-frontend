import { useState, useEffect } from "react";
const notes = require('../api/notes');

function NoteList () {
	const [list, setList] = useState([]);

	useEffect(async () => {
		let l = await notes.getNoteList();

		setList(l.notes);
	},[])

	return <div id="note-list">
		{list.map(note => {
			return <div
				className="stickies"
				style={{ backgroundColor: note.color }}
				onClick={() => {
					window.location.href = '/note/' + note.id;
				}}
			>
				<div className="body">
					<h3>{note.title}</h3>
					{note.content}
				</div>
			</div>
		})}
	</div>;
}

export default NoteList;