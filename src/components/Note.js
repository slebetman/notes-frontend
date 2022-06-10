import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ColorPicker from "./Note/ColorPicker";
import Markdown from "./Markdown";
const notes = require('../api/notes');

function Notes () {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [color, setColor] = useState('#FFFFFF');
	const [editing, setEditing] = useState(false);

	function loadNote () {
		if (id !== 'new') {
			notes.getNote(id).then(note => {
				setTitle(note.note.title);
				setContent(note.note.content);
				setColor(note.note.color);
			});
		}
		else {
			setEditing(true);
		}
	}

	useEffect(loadNote,[id]);

	async function saveNote () {
		if (id === 'new') {
			await notes.newNote(title, content, color);
		}
		else {
			await notes.editNote(id, title, content, color);
		}
		setEditing(false);
	}

	return <div id="note">
		<div className="input-group">
			{ editing ?
				<>
					<input type="text" id="title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
					<ColorPicker value={color} onChange={c => setColor(c)} />
				</>
				:
				<h3
					onClick={() => setEditing(true)}
					onTouchStart={() => setEditing(true)}
				>
					{title}
				</h3>
			}
		</div>
		<div className="input-group">
			{ editing ?
				<textarea id="body"
					style={{ backgroundColor: color }}
					value={content} 
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>
				:
				<div id="body"
					style={{ backgroundColor: color }}
					onClick={() => setEditing(true)}
					onTouchStart={() => setEditing(true)}
				>
					<Markdown content={content} />
				</div>
			}
		</div>
		<div className="input-group">
			{ editing ?
				<>
					<button
						onClick={async () => {
							await saveNote();
							console.log('saved');

							if (id === 'new') {
								window.location.href = '/';
							}
							else {
								setEditing(false);
							}
						}}
					>
						Save
					</button>
					<button
						onClick={() => {
							if (id === 'new') {
								window.location.href = '/';
							}
							else {
								loadNote();
								setEditing(false);
							}
						}}
					>
						Cancel
					</button>
				</>
				:
				<>
					<button
						onClick={() => {
							window.location.href = '/';
						}}
					>
						Back
					</button>
				</>
			}
		</div>
	</div>;
}

export default Notes;