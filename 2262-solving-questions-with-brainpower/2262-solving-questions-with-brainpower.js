/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = (q) => {
    const n = q.length;
    const d = new Float64Array(n + 1);
    for (let i = n - 1; i >= 0; --i)
        d[i] = Math.max(q[i][0] + d[Math.min(1 + i + q[i][1], n)], d[1 + i]);
    return d[0];
};