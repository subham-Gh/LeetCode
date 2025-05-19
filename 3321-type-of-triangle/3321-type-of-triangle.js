/**
 * @param {number[]} nums
 * @return {string}
 */

var triangleType = function (nums) {
    nums.sort((a, b) => a - b);
    const [a, b, c] = nums;

    if (a <= 0 || a + b <= c) return 'none';

    if (a === b && b === c) return 'equilateral';
    else if (a === b || b === c) return 'isosceles';
    return 'scalene';
};