/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, m) {
    // Calculate the total sum needed for all rolls
  const n = rolls.length;
  const totalSum = (n + m) * mean;
  
  // Calculate the current sum of the given rolls
  const currentSum = rolls.reduce((acc, roll) => acc + roll, 0);
  
  // Calculate the required sum for the missing rolls
  const missingSum = totalSum - currentSum;
  
  // Check if it's possible to achieve the missing sum with the given constraints
  if (missingSum < m || missingSum > 6 * m) {
    return [];
  }
  
  // Initialize the missing rolls array with the minimum possible values (1s)
  const result = Array(m).fill(1);
  
  // Distribute the remaining sum
  let remainingSum = missingSum - m; // subtract m because each element is already 1
  
  for (let i = 0; i < m; i++) {
    // Add up to 5 more to each element to not exceed 6
    const addValue = Math.min(5, remainingSum);
    result[i] += addValue;
    remainingSum -= addValue;
    
    // If no more sum is left to distribute, break out early
    if (remainingSum === 0) {
      break;
    }
  }
  
  return result;
};