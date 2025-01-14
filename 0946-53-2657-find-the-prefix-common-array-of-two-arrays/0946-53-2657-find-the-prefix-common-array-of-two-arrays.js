/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function findThePrefixCommonArray(A, B) {
    const n = A.length;
    const seenA = new Set();
    const seenB = new Set();
    const result = [];

    for (let i = 0; i < n; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);
        
        // Count the number of common elements
        let commonCount = 0;
        for (let item of seenA) {
            if (seenB.has(item)) {
                commonCount++;
            }
        }
        result.push(commonCount);
    }
    return result;
}
