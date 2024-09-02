/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    // Calculate the total chalk required for one full round
  let totalChalk = chalk.reduce((acc, cur) => acc + cur, 0);
  
  // Reduce k by the total number of full rounds
  k %= totalChalk;

  // Find the student who cannot be supplied with enough chalk
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) {
      return i;
    }
    k -= chalk[i];
  }

  // This line will never be reached due to the problem constraints
  return -1;
};