/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    const n = arr.length;
    let left = 0, right = n - 1;

    // Step 1: Find the longest non-decreasing prefix
    while (left < n - 1 && arr[left] <= arr[left + 1]) {
        left++;
    }

    // Entire array is non-decreasing
    if (left === n - 1) return 0;

    // Step 2: Find the longest non-decreasing suffix
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }

    // Minimum length to remove: removing the middle part completely
    let minRemove = Math.min(n - left - 1, right);

    // Step 3: Try to merge prefix and suffix
    let i = 0, j = right;
    while (i <= left && j < n) {
        if (arr[i] <= arr[j]) {
            minRemove = Math.min(minRemove, j - i - 1);
            i++;
        } else {
            j++;
        }
    }

    return minRemove;
};