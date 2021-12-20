const api = require('./baseApi');

function getNoteList () {
	return api.get('/notes/list');
}

function getNote (id) {
	return api.get('/notes/get/' + id);
}

function newNote (title, content, color) {
	return api.post('/notes/new', { title, content, color });
}

function editNote (id, title, content, color) {
	return api.post('/notes/edit/' + id, { title, content, color });
}

function deleteNote (id) {
	return api.post('/notes/delete/' + id);
}

module.exports = {
	getNoteList,
	getNote,
	newNote,
	editNote,
	deleteNote,
}
