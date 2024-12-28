/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || words.length === 0) return [];
    
    const wordLength = words[0].length;
    const wordCount = words.length;
    const substringLength = wordLength * wordCount;
    const wordFrequency = {};
    const result = [];

    // Build the frequency map for words
    for (const word of words) {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }

    // Traverse the string
    for (let i = 0; i <= s.length - substringLength; i++) {
        const seenWords = {};
        let j = 0;

        // Check every word in the current window
        while (j < wordCount) {
            const wordIndex = i + j * wordLength;
            const word = s.substring(wordIndex, wordIndex + wordLength);

            if (!wordFrequency[word]) break;

            seenWords[word] = (seenWords[word] || 0) + 1;

            // If a word appears more than expected, break
            if (seenWords[word] > wordFrequency[word]) break;

            j++;
        }

        // If all words match, record the starting index
        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
};