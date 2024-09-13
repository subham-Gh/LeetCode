/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const prefixXOR = new Array(arr.length + 1).fill(0);
  
  // Compute the prefix XOR array
  for (let i = 0; i < arr.length; i++) {
    prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
  }
  
  const result = [];
  
  // Answer each query using the prefix XOR array
  for (let [L, R] of queries) {
    result.push(prefixXOR[R + 1] ^ prefixXOR[L]);
  }
  
  return result;
};