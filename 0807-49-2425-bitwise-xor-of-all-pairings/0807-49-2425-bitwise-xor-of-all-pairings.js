/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function xorAllNums(nums1, nums2) {
    const xorArray = (arr) => arr.reduce((xor, num) => xor ^ num, 0);

    const xor1 = xorArray(nums1);
    const xor2 = xorArray(nums2);

    // If the size of nums1 is odd, each element in nums2 will be XORed once with all elements in nums1
    const part1 = (nums2.length % 2 === 1) ? xor1 : 0;

    // If the size of nums2 is odd, each element in nums1 will be XORed once with all elements in nums2
    const part2 = (nums1.length % 2 === 1) ? xor2 : 0;

    return part1 ^ part2;
}
