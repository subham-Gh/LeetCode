/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = '';

    for (let i = 0; i < num.length - 2; i++) {
        const substr = num.substring(i, i + 3);
        if (substr[0] === substr[1] && substr[1] === substr[2]) {
            if (substr > max) {
                max = substr;
            }
        }
    }

    return max;
};