/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
    // Convert number to string to manipulate digits
    let numStr = num.toString();

    // Replace the first '6' with '9' only once
    let resultStr = numStr.replace('6', '9');

    // Convert back to number and return
    return parseInt(resultStr);
};
