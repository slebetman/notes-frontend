const conf = require('../util/config');

function get (path) {
	return fetch(conf.base_url + path).then(res => res.json());
}

function post (path, obj) {
	return fetch(conf.base_url + path, {
		method: 'POST',
		body: JSON.stringify(obj),
	}).then(res => res.json());
}

module.exports = {
	get,
	post,
}