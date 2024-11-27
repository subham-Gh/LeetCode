/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const adj = Array.from({ length: n }, () => []);

    // Initialize the road connections between consecutive cities
    for (let i = 0; i < n - 1; i++) {
        adj[i].push(i + 1);
    }

    // BFS to find the shortest path from city 0 to city n-1
    const bfs = () => {
        const dist = Array(n).fill(-1);
        dist[0] = 0;
        const queue = [0];

        while (queue.length > 0) {
            const node = queue.shift();
            for (const neighbor of adj[node]) {
                if (dist[neighbor] === -1) {
                    dist[neighbor] = dist[node] + 1;
                    queue.push(neighbor);
                }
            }
        }
        return dist[n - 1];
    };

    const results = [];
    for (const [u, v] of queries) {
        adj[u].push(v);
        results.push(bfs());
    }

    return results;
};