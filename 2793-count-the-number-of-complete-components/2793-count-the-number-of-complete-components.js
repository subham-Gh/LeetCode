/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    let graph = new Map();
    
    for (let [a, b] of edges) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push(b);
        graph.get(b).push(a);
    }

    let visited = new Set();
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            let component = new Set();
            dfs(i, component, visited);
            if ([...component].every(node => (graph.get(node)?.length || 0) === component.size - 1)) {
                count++;
            }
        }
    }

    return count;

    function dfs(node, component, visited) {
        component.add(node);
        visited.add(node);
        for (let neighbor of (graph.get(node) || [])) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component, visited);
            }
        }
    }
};