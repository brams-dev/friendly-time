import test from 'ava';
import friendlyTime from './index.js'

const now = Date.now();

test('second', t => {
	const time = new Date(now - (1000 * 5));
	t.is(friendlyTime(time), 'just now');

	const time2 = new Date(now + (1000 * 3));
	t.is(friendlyTime(time2), 'any second');
});

test('seconds', t => {
	const time = new Date(now - (1000 * 15));
	t.is(friendlyTime(time), '15 seconds ago');

	const time2 = new Date(now + (1000 * 40));
	t.is(friendlyTime(time2), '40 seconds from now');
});

test('minute', t => {
	const time = new Date(now - (1000 * 60));
	t.is(friendlyTime(time), 'a minute ago');

	const time2 = new Date(now + (1000 * 70));
	t.is(friendlyTime(time2), 'a minute from now');
});

test('minutes', t => {
	const time = new Date(now - (1000 * 60 * 30));
	t.is(friendlyTime(time), '30 minutes ago');

	const time2 = new Date(now + (1000 * 60 * 12));
	t.is(friendlyTime(time2), '12 minutes from now');
});

test('hour', t => {
	const time = new Date(now - (1000 * 60 * 60));
	t.is(friendlyTime(time), 'an hour ago');

	const time2 = new Date(now + (1000 * 60 * 90));
	t.is(friendlyTime(time2), 'an hour from now');
});

test('hours', t => {
	const time = new Date(now - (1000 * 60 * 60 * 2));
	t.is(friendlyTime(time), '2 hours ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 6));
	t.is(friendlyTime(time2), '6 hours from now');
});

test('day', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24));
	t.is(friendlyTime(time), 'a day ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 23));
	t.is(friendlyTime(time2), 'a day from now');
});

test('days', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 5));
	t.is(friendlyTime(time), '5 days ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 6));
	t.is(friendlyTime(time2), '6 days from now');
});

test('week', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 7));
	t.is(friendlyTime(time), 'a week ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 9));
	t.is(friendlyTime(time2), 'a week from now');
});

test('weeks', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 7 * 3));
	t.is(friendlyTime(time), '3 weeks ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 7 * 2));
	t.is(friendlyTime(time2), '2 weeks from now');
});

test('month', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 31));
	t.is(friendlyTime(time), 'a month ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 29));
	t.is(friendlyTime(time2), 'a month from now');
});

test('months', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 30 * 9));
	t.is(friendlyTime(time), '9 months ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 30 * 2));
	t.is(friendlyTime(time2), '2 months from now');
});

test('year', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 366));
	t.is(friendlyTime(time), 'a year ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 360));
	t.is(friendlyTime(time2), 'a year from now');
});

test('years', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 365 * 12));
	t.is(friendlyTime(time), '12 years ago');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 365 * 40));
	t.is(friendlyTime(time2), '40 years from now');
});