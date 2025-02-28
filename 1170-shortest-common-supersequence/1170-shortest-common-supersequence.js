/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function shortestCommonSupersequence(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    
    // Create a DP table to store the length of the LCS
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // Fill the DP table with LCS lengths
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Build the SCS by using the DP table
    let scs = '';
    let i = m, j = n;
    
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            scs = str1[i - 1] + scs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            scs = str1[i - 1] + scs;
            i--;
        } else {
            scs = str2[j - 1] + scs;
            j--;
        }
    }

    // If there are remaining characters in str1
    while (i > 0) {
        scs = str1[i - 1] + scs;
        i--;
    }

    // If there are remaining characters in str2
    while (j > 0) {
        scs = str2[j - 1] + scs;
        j--;
    }

    return scs;
}