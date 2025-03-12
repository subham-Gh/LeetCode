/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
    let positiveCount = 0;
    let negativeCount = 0;

    // Loop through the array to count positives and negatives
    for (let num of nums) {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        }
    }

    // Return the maximum count between positive and negative integers
    return Math.max(positiveCount, negativeCount);
}