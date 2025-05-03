/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    const n = A.length;
    
    function check(x) {
        let rotationsA = 0, rotationsB = 0;
        for (let i = 0; i < n; i++) {
            if (A[i] !== x && B[i] !== x) return -1;
            else if (A[i] !== x) rotationsA++;
            else if (B[i] !== x) rotationsB++;
        }
        return Math.min(rotationsA, rotationsB);
    }
    
    let result = check(A[0]);
    if (result !== -1 || A[0] === B[0]) return result;
    return check(B[0]);
};
