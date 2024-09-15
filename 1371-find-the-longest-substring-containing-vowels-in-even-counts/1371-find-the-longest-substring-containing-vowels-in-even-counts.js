/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  const vowelToBit = {
    'a': 1 << 0,  // 00001
    'e': 1 << 1,  // 00010
    'i': 1 << 2,  // 00100
    'o': 1 << 3,  // 01000
    'u': 1 << 4   // 10000
  };
  let maxLength = 0;
  let mask = 0;  // Initially, all vowels have appeared an even number of times.
  const seen = { 0: -1 };  // Store the first occurrence of each bitmask (prefix XOR)
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    // Update the bitmask if the character is a vowel
    if (char in vowelToBit) {
      mask ^= vowelToBit[char];
    }
    
    // If we've seen this mask before, the substring between those positions has all vowels even
    if (mask in seen) {
      maxLength = Math.max(maxLength, i - seen[mask]);
    } else {
      // Store the first occurrence of this bitmask
      seen[mask] = i;
    }
  }
  
  return maxLength;
};