/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
    const n = nums2.length;

    const countLEQ = (x) => {
        let count = 0;
        for (let a of nums1) {
            if (a > 0) {
                // nums2 is sorted ascending, count nums2[j] <= x / a
                let left = 0, right = n;
                while (left < right) {
                    let mid = Math.floor((left + right) / 2);
                    if (a * nums2[mid] <= x) left = mid + 1;
                    else right = mid;
                }
                count += left;
            } else if (a < 0) {
                // nums2 is sorted ascending, count nums2[j] >= ceil(x / a)
                let left = 0, right = n;
                while (left < right) {
                    let mid = Math.floor((left + right) / 2);
                    if (a * nums2[mid] <= x) right = mid;
                    else left = mid + 1;
                }
                count += (n - right);
            } else {
                if (x >= 0) count += n;
            }
        }
        return count;
    };

    let low = -1e10, high = 1e10;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (countLEQ(mid) >= k) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
