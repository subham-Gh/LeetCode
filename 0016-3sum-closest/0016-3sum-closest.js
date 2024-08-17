/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    // Step 2: Iterate with a fixed element
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        // Step 3: Two-pointer approach
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // If the current sum is exactly the target, return it immediately
            if (currentSum === target) {
                return currentSum;
            }

            // If the current sum is closer to the target than the previous closest, update closestSum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move pointers based on comparison with the target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
};