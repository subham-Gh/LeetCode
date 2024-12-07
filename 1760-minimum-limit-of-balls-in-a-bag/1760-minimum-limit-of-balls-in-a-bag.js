/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1, right = Math.max(...nums);

    const canDistribute = (penalty) => {
        let operations = 0;
        for (let num of nums) {
            operations += Math.floor((num - 1) / penalty);
            if (operations > maxOperations) return false;
        }
        return true;
    };

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canDistribute(mid)) {
            right = mid; // Try smaller penalty
        } else {
            left = mid + 1; // Increase penalty
        }
    }

    return left;
};