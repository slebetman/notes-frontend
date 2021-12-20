import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { CompactPicker } from 'react-color';
import Popup from "reactjs-popup";
const notes = require('../api/notes');

function Notes () {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [color, setColor] = useState('#FFFFFF');

	useEffect(async () => {
		if (id !== 'new') {
			let note = await notes.getNote(id);

			setTitle(note.note.title);
			setContent(note.note.content);
			setColor(note.note.color);
		}
	},[]);

	return <div id="note">
		<div className="input-group">
			<input type="text" value={title} id="title"/>
			<Popup trigger={<button id="color">Color</button>}>
				<CompactPicker
					color={color}
					onChangeComplete={c => setColor(c.hex)}
				/>
			</Popup>
		</div>
		<div className="input-group">
			<textarea id="body" style={{
				backgroundColor: color,
			}} value={content} />
		</div>
		<div className="input-group">
			<button
				onClick={() => {
					console.log('saved');
				}}
			>
				Save
			</button>
			<button
				onClick={() => {
					window.location.href = '/';
				}}
			>
				Cancel
			</button>
		</div>
	</div>;
}

export default Notes;