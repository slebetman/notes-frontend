import { useState, useEffect } from "react";
const notes = require('../api/notes');

function NoteList () {
	const [list, setList] = useState([]);

	async function fetchNotes () {
		let l = await notes.getNoteList();

		setList(l.notes);
	}

	useEffect(fetchNotes,[]);

	return <div id="note-list">
		<button id="create"
			onClick={() => {
				window.location.href = '/note/new';
			}}
		>
			<span className="material-icons-outlined">
				note_add
			</span>
			New Note
		</button>
		<div>
			{list.map(note => {
				return <div
					className="stickies"
					style={{ backgroundColor: note.color }}
				>
					<div className="delete-btn"
						onClick={async () => {
							await notes.deleteNote(note.id);
							fetchNotes();
						}}
					>
						×
					</div>
					<div className="body"
						onClick={() => {
							window.location.href = '/note/' + note.id;
						}}
					>
						<h3>{note.title}</h3>
						<div className="content">
							{note.content}
						</div>
					</div>
				</div>
			})}
		</div>
	</div>;
}

export default NoteList;