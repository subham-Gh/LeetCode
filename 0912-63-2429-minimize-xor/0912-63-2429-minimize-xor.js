/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    let countBitsNum2 = 0;
    let temp2 = num2;
    while (temp2 > 0) {
        if (temp2 % 2 !== 0)
            countBitsNum2++;
        temp2 >>= 1;
    }
    let result = 0;
    for (let i = 31; i >= 0 && countBitsNum2 > 0; i--) {
        if (num1 & (1 << i)) {
            result |= (1 << i);
            countBitsNum2--;
        }
    }
    for (let i = 0; i < 32 && countBitsNum2 > 0; i++) {
        if (!(result & (1 << i))) {
            result |= (1 << i);
            countBitsNum2--;
        }
    }
    return result;
};