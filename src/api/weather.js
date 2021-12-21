const api = require('./baseApi');

function get () {
	return api.get('/weather/get');
}

module.exports = {
	get
}