/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // If needle is an empty string, return 0 (as per the problem specification)
    if (needle === "") {
        return 0;
    }

    // Use the indexOf function to find the first occurrence of needle in haystack
    return haystack.indexOf(needle);
};