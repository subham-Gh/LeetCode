/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(arr) {
    let n = arr.length;
    let operations = 0;
    let i = 0;
    
    while (i < n) {
        // If we find a 0, we need to flip a subarray starting here
        if (arr[i] === 0) {
            // If we're at the end and still have a 0, it's impossible
            if (i > n - 3) {
                return -1;
            }
            
            // Flip the next 3 elements (i, i+1, i+2)
            for (let j = i; j < i + 3 && j < n; j++) {
                arr[j] = 1 - arr[j]; // Flip 0 to 1 or 1 to 0
            }
            operations++;
        }
        i++;
    }
    
    // Check if all elements are 1
    for (let num of arr) {
        if (num === 0) return -1;
    }
    
    return operations;
}