/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    const n = amount.length;
    const tree = Array.from({ length: n }, () => []);
    
    // Step 1: Build adjacency list (tree)
    for (const [u, v] of edges) {
        tree[u].push(v);
        tree[v].push(u);
    }

    // Step 2: Find Bob's path from 'bob' to '0'
    let bobPath = new Map();
    function findBobPath(node, parent, depth) {
        if (node === 0) {
            bobPath.set(0, depth);
            return true;
        }
        for (let neighbor of tree[node]) {
            if (neighbor !== parent && findBobPath(neighbor, node, depth + 1)) {
                bobPath.set(node, depth);
                return true;
            }
        }
        return false;
    }
    findBobPath(bob, -1, 0);

    // Step 3: DFS to maximize Alice's profit
    let maxProfit = -Infinity;
    function dfs(node, parent, depth, currentProfit) {
        let bobDepth = bobPath.has(node) ? bobPath.get(node) : Infinity;
        if (depth < bobDepth) currentProfit += amount[node];       // Alice gets full amount
        else if (depth === bobDepth) currentProfit += Math.floor(amount[node] / 2); // Half profit

        let isLeaf = true;
        for (let neighbor of tree[node]) {
            if (neighbor !== parent) {
                isLeaf = false;
                dfs(neighbor, node, depth + 1, currentProfit);
            }
        }

        if (isLeaf) maxProfit = Math.max(maxProfit, currentProfit);
    }
    
    dfs(0, -1, 0, 0);
    return maxProfit;
};