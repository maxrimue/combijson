const test = require('ava');
const combijson = require('./index.js');

test('handles zero arguments', t => {
	t.deepEqual(combijson(), {});
});

test('handles empty object', t => {
	t.deepEqual(combijson([{}]), {});
});

test('takes just one object', t => {
	const obj = {hello: 'test'};

	t.deepEqual(combijson([obj]), obj);
});

test('merges two objects', t => {
	const obj1 = {hello: 'test'};
	const obj2 = {hello: 'world', testing: 'tests'};
	const obj3 = {hello: 'test', testing: 'tests'};

	t.deepEqual(combijson([obj1, obj2]), obj3);
});

test('merges three objects', t => {
	const obj1 = {hello: 'test', feeling: 'good'};
	const obj2 = {hello: 'test', feeling: 'mad', randomText: true};
	const obj3 = {hello: 'test', randomText: false, turtles: 'rock'};
	const obj4 = {hello: 'test', feeling: 'good', turtles: 'rock', randomText: true};

	t.deepEqual(combijson([obj1, obj2, obj3]), obj4);
});

test('merges JSON strings', t => {
	const obj1 = '{"hello": "world"}';
	const obj2 = '{"hello": "world"}';
	const obj3 = '{"hello": "there", "weather": "nice"}';
	const obj4 = {hello: 'world', weather: 'nice'};

	t.deepEqual(combijson([obj1, obj2, obj3]), obj4);
});

test('merges JSON strings and objects', t => {
	const obj1 = '{"hello": "world"}';
	const obj2 = {hello: 'there', weather: 'nice'};
	const obj3 = {hello: 'world', weather: 'nice'};

	t.deepEqual(combijson([obj1, obj2]), obj3);
});

test('fails with arguments of wrong type', t => {
	t.deepEqual(combijson([2]), new Error('Expected object or JSON string'));
});
