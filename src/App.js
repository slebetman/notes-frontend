import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Note from './components/Note';
import NoteList from './components/NoteList';

function App() {
	return <>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"></link>

		<Header/>

		<div id="content">
			<BrowserRouter>
				<Routes>
					<Route path="/note/:id" element={<Note/>} />
					<Route path="/" element={<NoteList/>} />
				</Routes>
			</BrowserRouter>
		</div>
	</>
}

export default App;
