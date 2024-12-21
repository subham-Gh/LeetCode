/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const adj = Array.from({ length: n }, () => []);
    
    // Build adjacency list for the tree
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    let components = 0;

    const dfs = (node, parent) => {
        let subtreeSum = values[node];

        for (const neighbor of adj[node]) {
            if (neighbor !== parent) {
                subtreeSum += dfs(neighbor, node);
            }
        }

        // If the subtree sum is divisible by k, we can form a component
        if (subtreeSum % k === 0) {
            components++;
            return 0; // Reset the sum for the current component
        }

        return subtreeSum;
    };

    dfs(0, -1); // Start DFS from the root node (0)
    return components;
};