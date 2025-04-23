/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const groups = new Map();

    const digitSum = (num) => {
        return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    for (let i = 1; i <= n; i++) {
        const sum = digitSum(i);
        groups.set(sum, (groups.get(sum) || 0) + 1);
    }

    let maxSize = 0;
    let count = 0;

    for (let groupSize of groups.values()) {
        if (groupSize > maxSize) {
            maxSize = groupSize;
            count = 1;
        } else if (groupSize === maxSize) {
            count++;
        }
    }

    return count;
};
