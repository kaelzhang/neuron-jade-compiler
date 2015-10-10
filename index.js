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
    globals: [],
    externalRuntime: false,
    compileDebug: false
  }, options);

  options.globals = unique(options.globals.concat(DEFAULT_OPTIONS.globals));

  try {
    var result = jade.compileClient(content, options);
  } catch(e) {
    return callback(e);
  }

  var name = options.name || 'template';

  callback(null, {
    content: 'module.exports = ' + name + ';\n' + result,
    js: true
  });
}
