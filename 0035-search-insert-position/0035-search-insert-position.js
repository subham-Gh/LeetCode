/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            low = mid + 1; // Search in the right half
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    return low; // Insertion index
}