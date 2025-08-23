/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function(grid) {
    let res = Number.POSITIVE_INFINITY;
    let A = grid;
    for (let rot = 0; rot < 4; rot++) {
        const m = A.length, n = A[0].length;
        for (let i = 1; i < m; i++) {
            const topArea = area(subRows(A, 0, i)); 
            for (let j = 1; j < n; j++) {
                const left  = sub(A, i, m, 0, j);
                const right = sub(A, i, m, j, n);
                const a2 = area(left), a3 = area(right);
                res = Math.min(res, topArea + a2 + a3);
            }
            for (let k = i + 1; k < m; k++) {
                const mid = subRows(A, i, k);
                const bot = subRows(A, k, m);
                const a2 = area(mid), a3 = area(bot);
                res = Math.min(res, topArea + a2 + a3);
            }
        }
        A = rotate(A);
    }
    return res;
};

function subRows(g, r1, r2) {
    if (r1 >= r2) return [];
    return g.slice(r1, r2).map(row => row.slice());
}

function sub(g, r1, r2, c1, c2) {
    if (r1 >= r2 || c1 >= c2) return [];
    const out = [];
    for (let i = r1; i < r2; i++) {
        out.push(g[i].slice(c1, c2));
    }
    return out;
}

function area(g) {
    if (g.length === 0 || g[0].length === 0) return 0;
    const m = g.length, n = g[0].length;
    let left = Infinity, top = Infinity, right = -1, bottom = -1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] === 1) {
                left = Math.min(left, j);
                right = Math.max(right, j);
                top = Math.min(top, i);
                bottom = Math.max(bottom, i);
            }
        }
    }
    if (right === -1) return 0;
    return (right - left + 1) * (bottom - top + 1);
}

function rotate(g) {
    const m = g.length, n = g[0].length;
    const r = Array.from({ length: n }, () => Array(m).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            r[j][m - 1 - i] = g[i][j];
        }
    }
    return r;
}