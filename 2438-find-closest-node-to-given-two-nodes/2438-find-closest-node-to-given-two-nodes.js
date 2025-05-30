/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
 var closestMeetingNode = function(edges, node1, node2) {
    const n = edges.length;

    // Helper function to calculate distances from a start node
    function getDistances(start) {
        const dist = new Array(n).fill(Infinity);
        let d = 0, curr = start;
        while (curr !== -1 && dist[curr] === Infinity) {
            dist[curr] = d++;
            curr = edges[curr];
        }
        return dist;
    }

    const dist1 = getDistances(node1);
    const dist2 = getDistances(node2);

    let result = -1;
    let minDist = Infinity;

    for (let i = 0; i < n; i++) {
        if (dist1[i] !== Infinity && dist2[i] !== Infinity) {
            const maxDist = Math.max(dist1[i], dist2[i]);
            if (maxDist < minDist || (maxDist === minDist && i < result)) {
                minDist = maxDist;
                result = i;
            }
        }
    }

    return result;
};
