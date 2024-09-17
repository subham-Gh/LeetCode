/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    // Create a map to count word frequencies
    const wordCount = new Map();
    
    // Helper function to count words
    function countWords(sentence) {
        const words = sentence.split(' ');
        for (const word of words) {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        }
    }
    
    // Count words in both sentences
    countWords(s1);
    countWords(s2);
    
    // Collect words that appear exactly once
    const result = [];
    for (const [word, count] of wordCount) {
        if (count === 1) {
            result.push(word);
        }
    }
    
    return result;
};