var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

var generateElements = function (url, selector, file) {
	request(url, function (error, response, body) {
		if (typeof body === 'string') {
			var $ = cheerio.load(body);
			var elements = $(selector).map(function () {
				return $(this).text().replace(/[^a-zA-Z0-9\-]/gi, '');
			}).get();
			// de-dupe
			elements = elements.filter(function(item, pos) {
				return elements.indexOf(item) === pos;
			});
			fs.writeFile(file, 'module.exports = exports = function () {return ' + JSON.stringify(elements) + ';}', 'utf-8');
		}
	});
};

generateElements('http://www.w3.org/TR/html-markup/elements.html', 'span.element', './html-elements.js');
generateElements('http://www.w3.org/TR/SVG/eltindex.html', 'span.element-name', './svg-elements.js');
