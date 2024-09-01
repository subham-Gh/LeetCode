/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    // Check if reshaping is possible
  if (original.length !== m * n) return [];

  // Create the 2D array
  const result = [];
  let index = 0;

  // Fill the 2D array row by row
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(original[index++]);
    }
    result.push(row);
  }

  return result;
};