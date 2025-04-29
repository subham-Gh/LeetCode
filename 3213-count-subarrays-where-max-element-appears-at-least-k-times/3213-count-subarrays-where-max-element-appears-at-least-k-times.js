/**
 * Count subarrays where maximum element appears exactly k times
 * @param {number[]} nums - The input array
 * @param {number} k - The target count of maximum element occurrences
 * @return {number} - Number of valid subarrays
 */
function countSubarrays(nums, k) {
    // Find the maximum element in the array
    let maxElement = 0;
    for (let n of nums) {
        maxElement = Math.max(maxElement, n);
    }
    
    let count = 0;
    let l = 0;
    let n = nums.length;
    let maxFound = 0;
    
    for (let r = 0; r < n; r++) {
        // If current element is the max element, increment counter
        if (nums[r] === maxElement) maxFound++;
        
        // While we have exactly k occurrences of max element
        while (maxFound === k) {
            // Count subarrays that end at positions r, r+1, r+2, ..., n-1
            count += n - r;
            
            // Shrink window from the left
            if (nums[l] === maxElement) maxFound--;
            l++;
        }
    }
    
    return count;
}