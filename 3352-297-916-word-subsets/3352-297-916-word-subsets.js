/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
function wordSubsets(words1, words2) {
    // Function to compute frequency map of a word
    const getFrequencyMap = (word) => {
        const freq = Array(26).fill(0);
        for (let char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    };

    // Create the maximum frequency map for words2
    const maxFreq = Array(26).fill(0);
    for (let word of words2) {
        const freq = getFrequencyMap(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }

    // Filter words in words1 that satisfy maxFreq
    const result = [];
    for (let word of words1) {
        const freq = getFrequencyMap(word);
        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) result.push(word);
    }

    return result;
}
