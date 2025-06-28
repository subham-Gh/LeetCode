/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSubsequence(nums, k) {
    // Step 1: Pair each number with its original index
    const indexedNums = nums.map((num, index) => [num, index]);

    // Step 2: Sort by value descending
    indexedNums.sort((a, b) => b[0] - a[0]);

    // Step 3: Take top k elements
    const topK = indexedNums.slice(0, k);

    // Step 4: Sort top k by original index to maintain order
    topK.sort((a, b) => a[1] - b[1]);

    // Step 5: Return only the values
    return topK.map(pair => pair[0]);
}