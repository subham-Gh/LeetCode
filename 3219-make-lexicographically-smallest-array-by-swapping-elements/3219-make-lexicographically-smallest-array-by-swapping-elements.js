/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
        var n = nums.length;
    var indices = [];
    
    // Create an array of indices
    for (var i = 0; i < n; i++) {
        indices.push(i);
    }
    
    // Sort indices based on the values in nums
    indices.sort(function (a, b) {
        return nums[a] - nums[b];
    });
    
    var result = new Array(n);
    var i = 0;
    
    while (i < n) {
        var j = i + 1;
        
        // Find the range of indices that can be swapped with each other
        while (j < n && nums[indices[j]] - nums[indices[j - 1]] <= limit) {
            j++;
        }
        
        // Extract the current group of indices
        var currentGroup = indices.slice(i, j);
        
        // Sort the current group based on their original positions
        currentGroup.sort(function (a, b) {
            return a - b;
        });
        
        // Place the corresponding values in the result array
        for (var k = 0; k < currentGroup.length; k++) {
            result[currentGroup[k]] = nums[indices[i + k]];
        }
        
        // Move to the next group
        i = j;
    }
    
    return result;
};