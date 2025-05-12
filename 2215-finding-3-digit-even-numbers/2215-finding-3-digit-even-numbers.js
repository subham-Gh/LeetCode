/**
 * @param {number[]} digits
 * @return {number[]}
 */
function findEvenNumbers(digits) {
    const result = new Set();  // Use a set to avoid duplicates
    const count = new Array(10).fill(0);

    // Count the frequency of each digit
    for (const digit of digits) {
        count[digit]++;
    }

    // Generate all 3-digit numbers
    for (let i = 100; i <= 998; i += 2) {  // Only even numbers
        const a = Math.floor(i / 100);
        const b = Math.floor((i % 100) / 10);
        const c = i % 10;

        // Check if we can build the number with available digits
        count[a]--;
        count[b]--;
        count[c]--;

        if (count[a] >= 0 && count[b] >= 0 && count[c] >= 0) {
            result.add(i);
        }

        // Restore the counts
        count[a]++;
        count[b]++;
        count[c]++;
    }

    return Array.from(result).sort((x, y) => x - y);
}
