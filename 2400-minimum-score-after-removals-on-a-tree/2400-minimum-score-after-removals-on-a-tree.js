/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
function minimumScore(nums, edges) {
    const n = nums.length;
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const parent = Array(n).fill(-1);
    const subXor = nums.slice();

    // DFS to calculate subtree XORs and set parent
    const dfs = (u, p) => {
        parent[u] = p;
        for (const v of graph[u]) {
            if (v === p) continue;
            dfs(v, u);
            subXor[u] ^= subXor[v];
        }
    };
    dfs(0, -1);

    const totalXor = subXor[0];
    let minScore = Infinity;
    const edgeList = [];

    // Identify directed edges: always from parent -> child
    for (const [u, v] of edges) {
        if (parent[v] === u) edgeList.push([u, v]);
        else edgeList.push([v, u]);
    }

    const isDescendant = (a, b) => {
        // check if b is in the subtree of a
        while (b !== -1) {
            if (b === a) return true;
            b = parent[b];
        }
        return false;
    };

    for (let i = 0; i < edgeList.length; ++i) {
        for (let j = i + 1; j < edgeList.length; ++j) {
            const [p1, c1] = edgeList[i];
            const [p2, c2] = edgeList[j];

            let xorA, xorB, xorC;
            if (isDescendant(c1, c2)) {
                // c2 is in c1's subtree
                xorA = subXor[c2];
                xorB = subXor[c1] ^ subXor[c2];
                xorC = totalXor ^ subXor[c1];
            } else if (isDescendant(c2, c1)) {
                // c1 is in c2's subtree
                xorA = subXor[c1];
                xorB = subXor[c2] ^ subXor[c1];
                xorC = totalXor ^ subXor[c2];
            } else {
                xorA = subXor[c1];
                xorB = subXor[c2];
                xorC = totalXor ^ subXor[c1] ^ subXor[c2];
            }
            const vals = [xorA, xorB, xorC];
            minScore = Math.min(minScore, Math.max(...vals) - Math.min(...vals));
        }
    }
    return minScore;
}
