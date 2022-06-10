import { useState, useEffect } from "react";
import Sticky from "./NoteList/Sticky";
const notes = require('../api/notes');

function NoteList () {
	const [list, setList] = useState([]);

	async function fetchNotes () {
		let l = await notes.getNoteList();

		setList(l.notes);
	}

	useEffect(() => fetchNotes(),[]);

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
			{list.map(note => <Sticky
				title={note.title}
				content={note.content}
				color={note.color}
				note_id={note.id}
				onDelete={async () => {
					await notes.deleteNote(note.id);
					fetchNotes();
				}}
			/>)}
		</div>
	</div>;
}

export default NoteList;