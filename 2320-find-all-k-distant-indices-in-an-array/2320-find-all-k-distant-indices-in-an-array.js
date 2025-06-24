/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
function findKDistantIndices(nums, key, k) {
    const result = new Set(); // Use a Set to avoid duplicates

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            // Add all indices in range [i - k, i + k]
            for (let j = Math.max(0, i - k); j <= Math.min(nums.length - 1, i + k); j++) {
                result.add(j);
            }
        }
    }

    // Convert Set to sorted array
    return Array.from(result).sort((a, b) => a - b);
}
