/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    // Step 1: Convert each character to its position in the alphabet
  let numStr = "";
  for (let char of s) {
    numStr += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }

  // Step 2: Perform the sum of digits k times
  let result = numStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  
  // Continue k - 1 times as we have already summed once
  for (let i = 1; i < k; i++) {
    result = result.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  return result;
};