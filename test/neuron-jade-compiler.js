'use strict';

var expect = require('chai').expect;
var compiler = require('../');
var node_path = require('path');
var fs = require('fs');

var file = node_path.join(__dirname, 'fixture/sample.jade');

compiler(fs.readFileSync(file).toString(), {
  filename: file,
  compileDebug: false

}, function (err, content) {
  console.log(err);
  console.log(content);
});