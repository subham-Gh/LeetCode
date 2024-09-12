/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let consistentCount = 0;
    
    for(let word of words) {
        let isConsistent = true;
        
        for (let char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        
        if (isConsistent) {
            consistentCount++;
        }
    }
    
    return consistentCount;
};