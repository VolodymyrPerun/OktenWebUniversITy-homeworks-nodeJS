/**
 * Checks if a String is whitespace, empty ("") or null.
 */
module.exports = function isBlank(string) {
    if (string === null || string === undefined) {
        return true;
    }
    return (/^\s*$/).test(string);
};
