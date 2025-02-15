/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let totalSum = 0;

    // Helper function to check if squareStr can be partitioned to sum to target
    function canPartition(squareStr, target, index, currentSum) {
        if (index === squareStr.length) {
            return currentSum === target;
        }

        let num = 0;
        for (let i = index; i < squareStr.length; i++) {
            num = num * 10 + Number(squareStr[i]); // Forming number step-by-step
            if (num + currentSum <= target && canPartition(squareStr, target, i + 1, currentSum + num)) {
                return true;
            }
        }
        return false;
    }

    for (let i = 1; i <= n; i++) {
        let squareStr = (i * i).toString();
        if (canPartition(squareStr, i, 0, 0)) {
            totalSum += i * i;
        }
    }

    return totalSum;
};