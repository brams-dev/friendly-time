
function format(date) {
	var diff = Date.now() - date.getTime();

	if (diff < 10000) {
		return 'just now';
	}

	for (var i = 0; i < units.length; i++) {
		if (diff <= units[i].max * units[i].value) {
			var t = Math.round(diff / units[i].value);
			return t <= 1 ? units[i].single : t + ' ' + units[i].name + 's ago';
		}
	}
}

var units = [
	{ name: 'second', value: 1000, max: 50, single: 'just now' },
	{ name: 'minute', value: 60000, max: 50, single: 'a minute ago' },
	{ name: 'hour', value: 3600000, max: 22, single: 'an hour ago' },
	{ name: 'day', value: 86400000, max: 6, single: 'yesterday' },
	{ name: 'week', value: 604800000, max: 3, single: 'last week' },
	{ name: 'month', value: 2592000000, max: 11, single: 'last month' },
	{ name: 'year', value: 31536000000, max: Infinity, single: 'a year ago' }
];

module.exports = format;
