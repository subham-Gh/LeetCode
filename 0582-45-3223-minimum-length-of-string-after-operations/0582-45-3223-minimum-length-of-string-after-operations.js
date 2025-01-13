/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const freqMap = {};
    
    // Step 1: Count frequency of each character in the string
    for (let c of s) {
        freqMap[c] = (freqMap[c] || 0) + 1;
    }

    let deletions = 0;

    // Step 2: Calculate deletions based on frequency of each character
    for (let count of Object.values(freqMap)) {
        if (count > 2) {
            if (count % 2 === 0) {
                deletions += (count - 2);
            } else {
                deletions += (count - 1);
            }
        }
    }

    // Step 3: Return the final length of the string after deletions
    return s.length - deletions;
};