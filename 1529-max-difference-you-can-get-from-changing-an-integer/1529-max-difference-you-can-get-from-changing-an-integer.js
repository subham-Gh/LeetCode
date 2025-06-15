/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const s = num.toString();

    // Get maxNum by replacing the first non-9 digit with 9
    let maxNum;
    for (let ch of s) {
        if (ch !== '9') {
            maxNum = parseInt(s.replaceAll(ch, '9'));
            break;
        }
    }
    if (maxNum === undefined) maxNum = num; // all digits are 9

    // Get minNum by replacing the first digit with 1 if it's not 1,
    // or some later digit with 0 if it's not 0 or the same as the first digit
    let minNum;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (i === 0 && ch !== '1') {
            minNum = parseInt(s.replaceAll(ch, '1'));
            break;
        } else if (i > 0 && ch !== '0' && ch !== s[0]) {
            minNum = parseInt(s.replaceAll(ch, '0'));
            break;
        }
    }
    if (minNum === undefined) minNum = num;

    return maxNum - minNum;
};
