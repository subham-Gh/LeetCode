/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

    // Helper: replace all vowels with '*'
    const devowel = word => word.toLowerCase().replace(/[aeiou]/g, '*');

    // Sets and maps for the different match rules
    const exactWords = new Set(wordlist);
    const caseInsensitiveMap = new Map();
    const vowelErrorMap = new Map();

    for (const word of wordlist) {
        const lower = word.toLowerCase();
        const devoweled = devowel(word);

        if (!caseInsensitiveMap.has(lower)) {
            caseInsensitiveMap.set(lower, word);
        }
        if (!vowelErrorMap.has(devoweled)) {
            vowelErrorMap.set(devoweled, word);
        }
    }

    const result = [];

    for (const query of queries) {
        if (exactWords.has(query)) {
            result.push(query);
        } else {
            const lower = query.toLowerCase();
            const devoweled = devowel(query);

            if (caseInsensitiveMap.has(lower)) {
                result.push(caseInsensitiveMap.get(lower));
            } else if (vowelErrorMap.has(devoweled)) {
                result.push(vowelErrorMap.get(devoweled));
            } else {
                result.push("");
            }
        }
    }

    return result;
};
