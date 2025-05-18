/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const MOD = 1e9 + 7;

var colorTheGrid = function(m, n) {
    const getValidRows = (m) => {
        const results = [];

        const dfs = (row, path) => {
            if (row === m) {
                results.push([...path]);
                return;
            }
            for (let color = 0; color < 3; color++) {
                if (row === 0 || path[row - 1] !== color) {
                    path[row] = color;
                    dfs(row + 1, path);
                }
            }
        };

        dfs(0, Array(m));
        return results;
    };

    const encode = (arr) => arr.join('');
    const validRows = getValidRows(m);
    const rowCount = validRows.length;

    // Build adjacency list
    const adj = new Map();
    for (let i = 0; i < rowCount; i++) {
        const a = validRows[i];
        const aStr = encode(a);
        adj.set(aStr, []);
        for (let j = 0; j < rowCount; j++) {
            const b = validRows[j];
            let valid = true;
            for (let k = 0; k < m; k++) {
                if (a[k] === b[k]) {
                    valid = false;
                    break;
                }
            }
            if (valid) adj.get(aStr).push(encode(b));
        }
    }

    // DP Map: rowIndex -> Map<encodedRow, count>
    let dp = new Map();
    for (const row of validRows) {
        dp.set(encode(row), 1);
    }

    for (let col = 1; col < n; col++) {
        const nextDP = new Map();
        for (const [currRow, count] of dp.entries()) {
            for (const neighbor of adj.get(currRow)) {
                nextDP.set(neighbor, (nextDP.get(neighbor) || 0) + count % MOD);
            }
        }
        dp = nextDP;
    }

    let res = 0;
    for (const val of dp.values()) {
        res = (res + val) % MOD;
    }

    return res;
};
