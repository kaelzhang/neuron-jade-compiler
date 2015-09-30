'use strict';

module.exports = compile;

var jade = require('jade-edge');
var mix = require('mix2');
var unique = require('array-unique');

var DEFAULT_OPTIONS = {
  globals: ['require', 'module', 'exports', '__filename', '__dirname']
};


function compile (content, options, callback) {
  options = mix({
    globals: []
  }, options);

  options.globals = unique(options.globals.concat(DEFAULT_OPTIONS.globals));
  options.externalRuntime = false;

  try {
    var result = jade.compileClient(content, options);
  } catch(e) {
    return callback(e);
  }

  callback(null, {
    content: 'module.exports = ' + result,
    js: true
  });
}
