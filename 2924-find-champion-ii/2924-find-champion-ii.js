/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    const inDegrees = new Array(n).fill(0);

    // Count in-degrees for each node
    for (const [_, v] of edges) {
        inDegrees[v]++;
    }

    // Find nodes with in-degree of 0
    const champions = [];
    for (let i = 0; i < n; i++) {
        if (inDegrees[i] === 0) {
            champions.push(i);
        }
    }

    // Return the result based on the number of champions
    return champions.length === 1 ? champions[0] : -1;
};