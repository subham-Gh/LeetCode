/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let map = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j];
            count += (map.get(product) || 0) * 8;
            map.set(product, (map.get(product) || 0) + 1);
        }
    }
    
    return count;
};