/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    // XOR the two numbers to find differing bits
  let xor = start ^ goal;
  
  // Count the number of set bits (1s) in the XOR result
  let count = 0;
  while (xor > 0) {
    // Increment count for each set bit
    count += xor & 1;
    
    // Right shift to check the next bit
    xor >>= 1;
  }
  
  return count;
};