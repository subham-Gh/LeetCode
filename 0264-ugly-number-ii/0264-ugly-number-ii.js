/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // Array to store the first n ugly numbers
    let ugly = new Array(n);
    ugly[0] = 1;

    // Pointers for multiples of 2, 3, and 5
    let i2 = 0, i3 = 0, i5 = 0;

    // Initial multiples of 2, 3, and 5
    let next2 = 2, next3 = 3, next5 = 5;

    for (let i = 1; i < n; i++) {
        // Choose the smallest of the next multiples
        let nextUgly = Math.min(next2, next3, next5);
        ugly[i] = nextUgly;

        // Increment the pointer for the chosen multiple
        if (nextUgly === next2) {
            i2++;
            next2 = ugly[i2] * 2;
        }
        if (nextUgly === next3) {
            i3++;
            next3 = ugly[i3] * 3;
        }
        if (nextUgly === next5) {
            i5++;
            next5 = ugly[i5] * 5;
        }
    }

    // Return the nth ugly number
    return ugly[n - 1];
};