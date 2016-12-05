'use strict';

module.exports = function (objects) {
	if (objects === undefined) {
		return {};
	}

	for (const object of objects) {
		if (typeof object === 'string') {
			objects[objects.indexOf(object)] = JSON.parse(object);
		} else if (typeof object !== 'object') {
			return new Error('Expected object or JSON string');
		}
	}

	let result = {};
	function addToArray(value, key) {
		// Adds value to res array *if not already existing*
		if (result[key] === undefined) {
			result[key] = value;
		}
	}

	// Check out each object and each of its keys,
	// then add everything we find once to the res array
	// without overwriting values by superior objects
	for (const object of objects) {
		for (const key in object) {
			if ({}.hasOwnProperty.call(object, key)) {
				addToArray(object[key], key);
			}
		}
	}

	return result;
};
