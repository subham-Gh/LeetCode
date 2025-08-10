/**
 * @param {number} n
 * @return {boolean}
 */
function reorderedPowerOf2(n) {
    const countDigits = (num) => {
        return num.toString().split('').sort().join('');
    };

    const target = countDigits(n);

    for (let i = 0; i < 31; i++) {
        let powerOfTwo = 1 << i; // 2^i
        if (countDigits(powerOfTwo) === target) {
            return true;
        }
    }

    return false;
}
