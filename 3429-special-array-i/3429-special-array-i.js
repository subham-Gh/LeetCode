/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = nums =>
    !/(00|11)/.test(nums.map($ => $ & 1).join(''));