/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    // Create a sorted version of the array with unique elements
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
    
    // Create a map that associates each element with its rank
    const rankMap = new Map();
    for (let i = 0; i < sortedUnique.length; i++) {
        rankMap.set(sortedUnique[i], i + 1);
    }
    
    // Transform the original array into its rank form
    return arr.map(num => rankMap.get(num));
};