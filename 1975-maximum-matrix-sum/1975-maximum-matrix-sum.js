/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let totalSum = 0;
    let minAbsValue = Infinity;
    let negativeCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const value = matrix[i][j];
            totalSum += Math.abs(value); // Add the absolute value to the total sum
            minAbsValue = Math.min(minAbsValue, Math.abs(value)); // Track the smallest absolute value
            if (value < 0) negativeCount++; // Count negative numbers
        }
    }

    // If the count of negatives is odd, subtract twice the smallest absolute value
    if (negativeCount % 2 === 1) {
        totalSum -= 2 * minAbsValue;
    }

    return totalSum;
};