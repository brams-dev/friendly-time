
function format(date) {
	var diff = Date.now() - date.getTime();

	var future = diff < 0;
	diff = Math.abs(diff);

	if (!future && diff < 10000) return 'just now';
	if (future && diff < 5000) return 'any second';

	var suffix = future ? ' from now' : ' ago';

	for (var i = 0; i < units.length; i++) {
		var unit = units[i];

		if (diff <= unit.max * unit.value) {
			var t = Math.round(diff / unit.value);
			return t === 1 ? unit.single + suffix : t + unit.name + 's' + suffix;
		}
	}
}

var units = [
	{ name: ' second', value: 1000, max: 50, single: 'a second' },
	{ name: ' minute', value: 60000, max: 50, single: 'a minute' },
	{ name: ' hour', value: 3600000, max: 22, single: 'an hour' },
	{ name: ' day', value: 86400000, max: 6, single: 'a day' },
	{ name: ' week', value: 604800000, max: 3.5, single: 'a week' },
	{ name: ' month', value: 2592000000, max: 11, single: 'a month' },
	{ name: ' year', value: 31536000000, max: Infinity, single: 'a year' }
];

module.exports = format;
