/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // Convert each number to a string
    let numStrs = nums.map(num => num.toString());

    // Sort the numbers based on the custom comparator
    numStrs.sort((a, b) => (b + a) - (a + b));

    // If the largest number after sorting is '0', return '0'
    if (numStrs[0] === "0") {
        return "0";
    }

    // Join the sorted numbers into a single string and return it
    return numStrs.join('');
};