/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
function countFairPairs(nums, lower, upper) {
    nums.sort((a, b) => a - b);  // Sort the array to use binary search for bounds
    let fairPairsCount = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        let low = lower - nums[i];
        let high = upper - nums[i];

        // Finding the left bound using binary search
        let left = binarySearch(nums, low, i + 1, nums.length - 1, true);
        // Finding the right bound using binary search
        let right = binarySearch(nums, high, i + 1, nums.length - 1, false);

        // Count pairs if within valid bounds
        if (left !== -1 && right !== -1 && left <= right) {
            fairPairsCount += (right - left + 1);
        }
    }

    return fairPairsCount;
}

// Binary search helper function
function binarySearch(nums, target, start, end, findFirst) {
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            result = mid;
            if (findFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return findFirst ? start : end;
}
