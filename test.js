import test from 'ava';
import friendlyTime from './index.js'

const now = new Date();

test('just now', t => {
	t.is(friendlyTime(now), 'just now');
});
