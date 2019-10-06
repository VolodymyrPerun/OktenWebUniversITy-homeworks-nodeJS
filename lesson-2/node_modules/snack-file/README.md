[![Build Status](https://travis-ci.org/subchen/snack-file.svg?branch=master)](https://travis-ci.org/subchen/snack-file)
[![Code Coverage](https://img.shields.io/coveralls/subchen/snack-file/master.svg)](https://coveralls.io/r/subchen/snack-file)
[![NPM Repo](https://img.shields.io/npm/v/snack-file.svg)](https://www.npmjs.com/package/snack-file)
[![License](http://img.shields.io/badge/License-Apache_2-red.svg?style=flat)](http://www.apache.org/licenses/LICENSE-2.0)

# snack-file

File manipulation functions for node.js

# Installation

```shell
npm install snack-file
```

# Example

```js
var file = require('snack-file');

console.log(file.exists('/etc/passwd'));
```

# APIs

* exists
* isFile
* isDirectory
* isSymbolicLink
* read
* readBuffer
* write
* writeBuffer
* mkdirs
* glob
* move
* copy
* delete
* stat
* size
* lastModified
* readJSON
* resolve
* path

# License

Released under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0).
