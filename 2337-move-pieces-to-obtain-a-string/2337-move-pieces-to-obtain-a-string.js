/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let L = 0, M = 0;
    const n = start.length;
    let tarSpace = 0, staSpace = 0;

    while (L < n && M < n) {
        while (L < n && target[L] === '_') {
            tarSpace++;
            L++;
        }
        while (M < n && start[M] === '_') {
            staSpace++;
            M++;
        }

        if (L < n && M < n) {
            if (target[L] !== start[M]) {
                return false;
            }
            if (target[L] === 'L') {
                if (tarSpace > staSpace) {
                    return false;
                }
            } else if (staSpace > tarSpace) {
                return false;
            }
            L++;
            M++;
        }
    }

    // Check remaining characters
    while (L < n) {
        if (target[L] !== '_') {
            return false;
        }
        L++;
    }
    while (M < n) {
        if (start[M] !== '_') {
            return false;
        }
        M++;
    }

    return true;
};