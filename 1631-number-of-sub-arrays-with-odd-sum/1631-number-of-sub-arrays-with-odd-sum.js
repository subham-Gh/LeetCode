/**
 * @param {number[]} arr
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
function numOfSubarrays(arr) {
  let odd = 0;
  let even = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // Get the prefix sum of the array
    sum += arr[i];
    if (sum % 2 === 0) {
      // If the sum is even, then the number of subarrays with an odd sum
      // is the same as the number of subarrays with an even sum
      even++;
    } else {
      // If the sum is odd, then the number of subarrays with an odd sum
      odd++;
    }
  }

  // Modulo the result by 10^9 + 7
  return (odd + odd * even) % (10 ** 9 + 7);
}