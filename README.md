[![NPM version](https://badge.fury.io/js/neuron-jade-compiler.svg)](http://badge.fury.io/js/neuron-jade-compiler)
[![npm module downloads per month](http://img.shields.io/npm/dm/neuron-jade-compiler.svg)](https://www.npmjs.org/package/neuron-jade-compiler)
[![Build Status](https://travis-ci.org/kaelzhang/neuron-jade-compiler.svg?branch=master)](https://travis-ci.org/kaelzhang/neuron-jade-compiler)
[![Dependency Status](https://david-dm.org/kaelzhang/neuron-jade-compiler.svg)](https://david-dm.org/kaelzhang/neuron-jade-compiler)

# neuron-jade-compiler

The jade(2.0) compiler module for neuron

## Install

```sh
$ npm install neuron-jade-compiler --save
```

## Usage

```js
var jade_compiler = require('neuron-jade-compiler');
var builder = require('neuron-builder');

builder(entry, {
  pkg: pkg,
  cwd: cwd,
  compilers: [{
    match: /\.jade$/,
    compiler: jade_compiler,
    options: jade_options
  }]
}, function(err, content){
  // if no `err`, `content` will be the bundled content.
});
```

see [neuron-builder](https://www.npmjs.com/package/neuron-builder) for more details.

### `jade_options`

Default specified options for `jade`

- filename: will always be the filename of the current file
- compileDebug: `false`
- externalRuntime: `false`

Other options are not set by default, see [here](http://jade-lang.com/api/) for details

## License

MIT
