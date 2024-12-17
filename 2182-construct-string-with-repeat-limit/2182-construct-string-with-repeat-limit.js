var repeatLimitedString = function(s, repeatLimit) {
    // Count frequency of each character
    const freq = new Array(26).fill(0);
    for (const char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Max-Heap of characters based on frequency and lexicographical order
    const maxHeap = [];
    for (let i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            maxHeap.push([-i, freq[i]]); // Store negative index for max-heap behavior
        }
    }
    maxHeap.sort((a, b) => a[0] - b[0]); // Sort heap

    let result = '';
    while (maxHeap.length > 0) {
        // Get the largest available character
        const [charIndex, count] = maxHeap.shift();
        const char = String.fromCharCode(-charIndex + 'a'.charCodeAt(0));

        // Number of times we can add this character
        const addCount = Math.min(count, repeatLimit);
        result += char.repeat(addCount);

        // Reduce the count of the current character
        if (count > addCount) {
            if (maxHeap.length === 0) break; // No alternative characters to insert
            // Get the next largest character
            const [nextIndex, nextCount] = maxHeap.shift();
            const nextChar = String.fromCharCode(-nextIndex + 'a'.charCodeAt(0));
            result += nextChar; // Insert one instance of the next character
            if (nextCount > 1) maxHeap.push([nextIndex, nextCount - 1]);
            maxHeap.push([charIndex, count - addCount]); // Push back current char with remaining count
            maxHeap.sort((a, b) => a[0] - b[0]); // Re-sort heap
        }
    }

    return result;
};