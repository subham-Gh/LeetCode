/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
     nums.sort((a, b) => a - b); 

    let low = 0;
    let high = nums[nums.length - 1] - nums[0]; 
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const count = countPairs(nums, mid);

        if (count < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};

function countPairs(nums, mid) {
    let count = 0;
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        while (j < nums.length && nums[j] - nums[i] <= mid) {
            j++;
        }
        count += j - i - 1;
    }

    return count;
}
