/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let freq = new Array(26).fill(0);
    
    // Count frequency of each letter in tiles
    for (let char of tiles) {
        freq[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    function backtrack() {
        let count = 0;
        for (let i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                // Use this character in a sequence
                freq[i]--;
                
                // Every time we use a letter, it forms a valid sequence
                count += 1 + backtrack();
                
                // Backtrack: Restore the frequency for the next branch
                freq[i]++;
            }
        }
        return count;
    }

    return backtrack();
};