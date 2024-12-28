/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSumOfThreeSubarrays = (nums, k) => {
    const n = nums.length;
    const sum = new Array(n - k + 1).fill(0);

    // Compute the sum of all subarrays of length k
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    sum[0] = currentSum;
    for (let i = 1; i < sum.length; i++) {
        currentSum += nums[i + k - 1] - nums[i - 1];
        sum[i] = currentSum;
    }

    // Compute the best left subarray sums
    const left_max = new Array(sum.length).fill(0);
    let maxIndex = 0;
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] > sum[maxIndex]) maxIndex = i;
        left_max[i] = maxIndex;
    }

    // Compute the best right subarray sums
    const right_max = new Array(sum.length).fill(0);
    maxIndex = sum.length - 1;
    for (let i = sum.length - 1; i >= 0; i--) {
        if (sum[i] >= sum[maxIndex]) maxIndex = i;
        right_max[i] = maxIndex;
    }

    // Find the best combination of three non-overlapping subarrays
    let result = [];
    let maxSum = 0;
    for (let i = k; i <= sum.length - k; i++) {
        const leftIndex = left_max[i - k];
        const rightIndex = right_max[i + k];
        const totalSum = sum[leftIndex] + sum[i] + sum[rightIndex];
        if (totalSum > maxSum) {
            maxSum = totalSum;
            result = [leftIndex, i, rightIndex];
        }
    }

    return result;
};
