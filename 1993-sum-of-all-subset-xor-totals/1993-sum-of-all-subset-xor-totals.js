/**
 * @param {number[]} nums
 * @return {number}
 */
function subsetXORSum(nums) {
    // Initialize result to 0
    let result = 0;
    
    // Iterate through each subset
    let n = nums.length;
    let totalSubsets = 1 << n; // 2^n subsets
    
    for (let mask = 0; mask < totalSubsets; mask++) {
        let xorSum = 0;
        
        // For each bit in the mask, check if the element is included in the subset
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) { // If the i-th bit is set in the mask
                xorSum ^= nums[i];
            }
        }
        
        // Add the XOR sum of the current subset to the result
        result += xorSum;
    }
    
    return result;
}