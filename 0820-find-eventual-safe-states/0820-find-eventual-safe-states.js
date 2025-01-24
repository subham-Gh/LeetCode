/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
    const n = graph.length;
    const reverseGraph = Array.from({ length: n }, () => []);
    const inDegree = Array(n).fill(0);

    // Construct the reverse graph and in-degrees
    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            reverseGraph[neighbor].push(i);
            inDegree[i]++;
        }
    }

    const queue = [];
    const safeNodes = [];

    // Start with terminal nodes (in-degree 0)
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Process nodes
    while (queue.length > 0) {
        const node = queue.shift();
        safeNodes.push(node);

        for (const neighbor of reverseGraph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Sort the result
    return safeNodes.sort((a, b) => a - b);
}
