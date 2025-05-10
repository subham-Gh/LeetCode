/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let sum1 = 0, sum2 = 0;
    let zero1 = 0, zero2 = 0;

    for (let num of nums1) {
        if (num === 0) {
            zero1++;
            sum1 += 1;
        } else {
            sum1 += num;
        }
    }

    for (let num of nums2) {
        if (num === 0) {
            zero2++;
            sum2 += 1;
        } else {
            sum2 += num;
        }
    }

    if ((zero1 === 0 && sum2 > sum1) || (zero2 === 0 && sum1 > sum2)) {
        return -1;
    }

    return Math.max(sum1, sum2);
};