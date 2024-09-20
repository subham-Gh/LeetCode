/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
     if (s.length === 0) return s;

    // Concatenate s with its reverse with a special character in between
    const revS = s.split('').reverse().join('');
    const concatStr = s + '#' + revS;

    // Build the KMP table for the concatenated string
    const kmpTable = buildKMPTable(concatStr);

    // Find the length of the longest palindrome prefix
    const longestPalindromePrefixLen = kmpTable[kmpTable.length - 1];

    // Add the necessary part of the reversed string in front to make the whole string a palindrome
    const suffix = s.slice(longestPalindromePrefixLen);
    return suffix.split('').reverse().join('') + s;
};

// Helper function to build the KMP table
function buildKMPTable(s) {
    const n = s.length;
    const table = new Array(n).fill(0);
    let j = 0;

    for (let i = 1; i < n; i++) {
        while (j > 0 && s[i] !== s[j]) {
            j = table[j - 1];
        }
        if (s[i] === s[j]) {
            j++;
        }
        table[i] = j;
    }

    return table;
}