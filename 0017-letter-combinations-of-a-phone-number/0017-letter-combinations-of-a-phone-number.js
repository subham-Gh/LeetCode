/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const digitToChar = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, currentCombination) {
        // Base case: if the current combination length equals digits length, add to result
        if (currentCombination.length === digits.length) {
            result.push(currentCombination);
            return;
        }

        // Get the characters that the current digit can represent
        const currentDigit = digits[index];
        const letters = digitToChar[currentDigit];

        // Iterate through the possible letters and continue building the combination
        for (let letter of letters) {
            backtrack(index + 1, currentCombination + letter);
        }
    }

    // Start backtracking from the first digit
    backtrack(0, "");

    return result;
};