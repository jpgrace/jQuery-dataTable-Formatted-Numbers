/*globals $ */
$.fn.dataTableExt.oSort['formatted-num-asc'] = function (x, y) {
	'use strict';

	// Define vars
	var a = [], b = [];

	// Match any character except: digits (0-9), dash (-), period (.), or backslash (/) and replace those characters with empty string.
	x = x.replace(/[^\d\-\.\/]/g, '');
	y = y.replace(/[^\d\-\.\/]/g, '');

	// Handle simple fractions
	if (x.indexOf('/') >= 0) {
		a = x.split("/");
		x = parseInt(a[0], 10) / parseInt(a[1], 10);
	}
	if (y.indexOf('/') >= 0) {
		b = y.split("/");
		y = parseInt(b[0], 10) / parseInt(b[1], 10);
	}

	return x - y;
};
$.fn.dataTableExt.oSort['formatted-num-desc'] = function (x, y) {
	'use strict';

	// Define vars
	var a = [], b = [];

	// Match any character except: digits (0-9), dash (-), period (.), or backslash (/) and replace those characters with empty string.
	x = x.replace(/[^\d\-\.\/]/g, '');
	y = y.replace(/[^\d\-\.\/]/g, '');

	// Handle simple fractions
	if (x.indexOf('/') >= 0) {
		a = x.split("/");
		x = parseInt(a[0], 10) / parseInt(a[1], 10);
	}
	if (y.indexOf('/') >= 0) {
		b = y.split("/");
		y = parseInt(b[0], 10) / parseInt(b[1], 10);
	}

	return y - x;
};