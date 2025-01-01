/**
 * @param {string} s
 * @return {number}
 */
function partitionString(s) {
    let partitions = 1; // Start with one partition
    let seen = new Set(); // To track characters in the current substring

    for (let char of s) {
        if (seen.has(char)) {
            // Duplicate found, start a new partition
            partitions++;
            seen.clear(); // Clear the set for the new partition
        }
        seen.add(char); // Add the character to the current set
    }

    return partitions;
}