var fs = require('fs');
var html = require('./html-elements.js')();
var svg = require('./svg-elements.js')();
var both = html.concat(svg);

var indexScript = [
  'var React = require(\'react\')',
  'module.exports = exports = function (obj) {',
  '\t' + JSON.stringify(both) + '.forEach(function (element) {',
  '\t\tif (!obj.hasOwnProperty(element)) {',
  '\t\t\tobj[element] = React.createFactory(element);',
  '\t\t}',
  '\t});',
  '};'
].join('\n');

fs.writeFile('./index.js', indexScript, 'utf-8');
