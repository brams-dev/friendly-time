import test from 'ava';
import friendlyTime from './index.js'

const now = new Date();

test('second', t => {
	t.is(friendlyTime(now), 'just now');
});

test('seconds', t => {
	const time = new Date(now - (1000 * 15));
	t.is(friendlyTime(time), '15 seconds ago');
});

test('minute', t => {
	const time = new Date(now - (1000 * 60));
	t.is(friendlyTime(time), 'a minute ago');
});

test('minutes', t => {
	const time = new Date(now - (1000 * 60 * 30));
	t.is(friendlyTime(time), '30 minutes ago');
});

test('hour', t => {
	const time = new Date(now - (1000 * 60 * 60));
	t.is(friendlyTime(time), 'an hour ago');
});

test('hours', t => {
	const time = new Date(now - (1000 * 60 * 60 * 2));
	t.is(friendlyTime(time), '2 hours ago');
});

test('day', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24));
	t.is(friendlyTime(time), 'yesterday');
});

test('days', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 5));
	t.is(friendlyTime(time), '5 days ago');
});

test('week', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 7));
	t.is(friendlyTime(time), 'last week');
});

test('weeks', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 7 * 3));
	t.is(friendlyTime(time), '3 weeks ago');
});

test('month', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 31));
	t.is(friendlyTime(time), 'last month');
});

test('months', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 30 * 9));
	t.is(friendlyTime(time), '9 months ago');
});

test('year', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 366));
	t.is(friendlyTime(time), 'a year ago');
});

test('years', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 365 * 12));
	t.is(friendlyTime(time), '12 years ago');
});