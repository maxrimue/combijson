'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (objects) {
	if (objects === undefined) {
		return {};
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var object = _step.value;

			if (typeof object === 'string') {
				objects[objects.indexOf(object)] = JSON.parse(object);
			} else if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
				return new Error('Expected object or JSON string');
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var result = {};
	function addToObject(source, target) {
		// Adds value to res object *if not already existing*
		for (var key in source) {
			if (_typeof(source[key]) === 'object' && !Array.isArray(source[key])) {
				if (target[key]) {
					addToObject(source[key], target[key]);
				} else {
					Object.assign(target, _defineProperty({}, key, source[key]));
				}
			} else {
				Object.assign(target, _defineProperty({}, key, source[key]));
			}
		}
	}

	// Check out each object and each of its keys,
	// then add everything we find once to the res array
	// without overwriting values by superior objects
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = objects.reverse()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _object = _step2.value;

			addToObject(_object, result);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return result;
};