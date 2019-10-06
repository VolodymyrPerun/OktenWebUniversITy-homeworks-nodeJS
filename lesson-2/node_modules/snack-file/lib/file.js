var fs = require('fs');
var path = require('path');
var glob = require('glob');
var rimraf = require('rimraf');

var file = module.exports = {};

file.exists = function(name) {
    return fs.existsSync(name);
};

file.isFile = function(name) {
    return fs.statSync(name).isFile();
};

file.isDirectory = function(name) {
    return fs.statSync(name).isDirectory();
};

file.isSymbolicLink = function(name) {
    return fs.lstatSync(name).isSymbolicLink();
};

file.read = function(name, encoding) {
    return fs.readFileSync(name, {
        encoding: encoding || 'utf-8'
    });
};

file.readBuffer = function(name) {
    return fs.readFileSync(name);
};

file.write = function(name, data, encoding) {
    return fs.writeFileSync(name, data, {
        encoding: encoding || 'utf-8'
    });
};

file.writeBuffer = function(name, buffer) {
    fs.writeFileSync(name, buffer);
};

file.mkdirs = function(dir, mode) {
    dir.split(/[\/\\]/g).reduce(function(parts, part) {
        parts += part + '/';
        var subpath = path.resolve(parts);
        if (!fs.existsSync(subpath)) {
            fs.mkdirSync(subpath, mode);
        }
        return parts;
    }, '');
};

// https://www.npmjs.com/package/glob
file.glob = function(pattern, options) {
    return glob.sync(pattern, options);
};

file.move = function(src, dest) {
    fs.renameSync(src, dest);
};

file.copy = function(src, dest, mkdirs) {
    var buffer = fs.readFileSync(src);
    if (mkdirs) {
        file.mkdirs(path.dirname(dest));
    }
    fs.writeFileSync(dest, buffer);
};

file.delete = function(name) {
    if (fs.statSync(name).isDirectory()) {
        rimraf.sync(name);
    }
    else {
        fs.unlinkSync(name);
    }
};

file.stat = function(name) {
    return fs.statSync(name);
};

file.size = function(name) {
    return fs.statSync(name).size;
};

file.lastModified = function(name) {
    return fs.statSync(name).utime;
};

file.readJSON = function(name, encoding) {
    var data = fs.readFileSync(name, {
        encoding: encoding || 'utf-8'
    });
    return JSON.parse(data);
};

file.resolve = function() {
    return path.resolve.apply(path, arguments);
};

file.path = function() {
    return path.join.apply(path, arguments);
};
