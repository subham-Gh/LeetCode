/**
 * @param {string} s
 * @return {number}
 */
function numberOfSubstrings(s) {
    let start = 0;
    let count = 0;
    const freq = { 'a': 0, 'b': 0, 'c': 0 };  // Frequency map for 'a', 'b', and 'c'
    
    // Traverse the string with the 'end' pointer
    for (let end = 0; end < s.length; end++) {
        // Increment the frequency of the character at 'end'
        freq[s[end]]++;
        
        // Check if the window contains all three characters
        while (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
            // If the window is valid, count the valid substrings
            count += s.length - end;
            
            // Shrink the window from the left
            freq[s[start]]--;
            start++;
        }
    }
    
    return count;
}