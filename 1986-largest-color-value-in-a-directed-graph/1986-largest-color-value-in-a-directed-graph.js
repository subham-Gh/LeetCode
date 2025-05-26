/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const n = colors.length;
    const graph = Array.from({ length: n }, () => []);
    const indegree = Array(n).fill(0);

    // Build graph and indegree
    for (const [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }

    // Queue for topological sort
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // dp[node][color] = max count of color at that node
    const dp = Array.from({ length: n }, () => Array(26).fill(0));
    let visited = 0;
    let result = 0;

    while (queue.length) {
        const node = queue.shift();
        visited++;

        // Increment the count of the current node's color
        const colorIndex = colors.charCodeAt(node) - 97;
        dp[node][colorIndex]++;
        result = Math.max(result, dp[node][colorIndex]);

        for (const neighbor of graph[node]) {
            for (let c = 0; c < 26; c++) {
                dp[neighbor][c] = Math.max(dp[neighbor][c], dp[node][c]);
            }
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return visited === n ? result : -1;
};
