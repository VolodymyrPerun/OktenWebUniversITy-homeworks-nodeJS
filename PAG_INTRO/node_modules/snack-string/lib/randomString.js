function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = function randomString(length, chars) {
    var string = [];
    for (var i = 0; i < length; i++) {
        var index = randomInt(0, chars.length);
        string.push(chars[index]);
    }
    return string.join('');
};
