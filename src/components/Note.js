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

	async function saveNote () {
		if (id === 'new') {
			await notes.newNote(title, content, color);
		}
		else {
			await notes.editNote(id, title, content, color);
		}
	}

	return <div id="note">
		<div className="input-group">
			<input type="text" id="title"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<Popup trigger={<button id="color">Color</button>} position="bottom right">
				<CompactPicker
					color={color}
					onChangeComplete={c => setColor(c.hex)}
					colors={[
						'#FFFFFF', '#FFFF66', '#FFCC66', '#FF6666', '#FF66FF', '#CC66FF',
						'#66CCFF', '#99FFFF', '#66FFCC', '#66FF66', '#6666FF', '#6666CC',
						
						'#CCCCCC', '#FFFF00', '#FFAA00', '#FF3333', '#FF00FF', '#AA00FF',
						'#00AAFF', '#33FFFF', '#00FFAA', '#00FF33', '#3333FF', '#3333AA',
					]}
				/>
			</Popup>
		</div>
		<div className="input-group">
			<textarea id="body"
				style={{ backgroundColor: color }}
				value={content} 
				onChange={(e) => {
					setContent(e.target.value);
				}}
			/>
		</div>
		<div className="input-group">
			<button
				onClick={async () => {
					await saveNote();
					console.log('saved');

					window.location.href = '/';
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