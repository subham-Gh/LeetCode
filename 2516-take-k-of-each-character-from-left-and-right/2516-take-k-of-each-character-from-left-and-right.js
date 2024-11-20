/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    const n = s.length;

    // Step 1: Count the occurrences of 'a', 'b', and 'c'
    const count = { a: 0, b: 0, c: 0 };
    for (const char of s) {
        count[char]++;
    }

    // Step 2: Check if it's impossible to take k of each character
    if (count['a'] < k || count['b'] < k || count['c'] < k) {
        return -1;
    }

    // Step 3: Use sliding window to find the longest valid subarray
    let left = 0, maxValidLength = 0;
    const windowCount = { a: 0, b: 0, c: 0 };

    for (let right = 0; right < n; right++) {
        // Add the current character to the window
        windowCount[s[right]] = (windowCount[s[right]] || 0) + 1;

        // If the window becomes invalid, shrink it
        while (
            count['a'] - windowCount['a'] < k ||
            count['b'] - windowCount['b'] < k ||
            count['c'] - windowCount['c'] < k
        ) {
            windowCount[s[left]]--;
            left++;
        }

        // Update the maximum valid window length
        maxValidLength = Math.max(maxValidLength, right - left + 1);
    }

    // Step 4: Calculate the minimum remaining length
    return n - maxValidLength;
};