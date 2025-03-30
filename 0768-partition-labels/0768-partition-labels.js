/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // Step 1: Record the last occurrence of each character
    const lastOccurrence = {};
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }
    
    // Step 2: Start partitioning
    let partitions = [];
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Update the end position based on the last occurrence of the current character
        end = Math.max(end, lastOccurrence[s[i]]);
        
        // If we've reached the end of the current partition
        if (i === end) {
            partitions.push(i - start + 1);
            start = i + 1;  // Update the start position for the next partition
        }
    }
    
    return partitions;
};