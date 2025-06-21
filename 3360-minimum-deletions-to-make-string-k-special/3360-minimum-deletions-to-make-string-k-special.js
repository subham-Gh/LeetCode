/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  const freq = new Array(26).fill(0);
  for (const c of word) freq[c.charCodeAt(0) - 97]++;
  
  const counts = freq.filter(c => c > 0);
  const n = word.length;
  let minDel = n;

  // Enumerate possible lower bound lo (minimum frequency to keep)
  for (const lo of counts) {
    const hi = lo + k;
    let deletions = 0;
    for (const c of counts) {
      if (c < lo) deletions += c;           // delete all occurrences
      else if (c > hi) deletions += c - hi; // trim to hi
    }
    minDel = Math.min(minDel, deletions);
  }
  
  return minDel;
};
