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

	const result = {};
	function addToObject(source, target) {
		// Adds value to res object *if not already existing*
		for (const key in source) {
			if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
				if (target[key]) {
					addToObject(source[key], target[key]);
				} else {
					Object.assign(target, {[key]: source[key]});
				}
			} else {
				Object.assign(target, {[key]: source[key]});
			}
		}
	}

	// Check out each object and each of its keys,
	// then add everything we find once to the res array
	// without overwriting values by superior objects
	for (const object of objects.reverse()) {
		addToObject(object, result);
	}

	return result;
};
