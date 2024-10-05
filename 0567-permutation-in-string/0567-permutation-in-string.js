/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;

    if (len1 > len2) return false;

    // Arrays to store character frequencies
    const s1Freq = Array(26).fill(0);
    const s2Freq = Array(26).fill(0);

    // Populate the frequency array for s1 and the first window in s2
    for (let i = 0; i < len1; i++) {
        s1Freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Helper function to check if two frequency arrays are equal
    const matches = (a, b) => {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

    // Check the initial window
    if (matches(s1Freq, s2Freq)) return true;

    // Sliding window: check the rest of s2
    for (let i = len1; i < len2; i++) {
        // Add the next character to the window
        s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        // Remove the first character of the previous window
        s2Freq[s2.charCodeAt(i - len1) - 'a'.charCodeAt(0)]--;

        // Check if the current window is a permutation of s1
        if (matches(s1Freq, s2Freq)) return true;
    }

    return false;
};