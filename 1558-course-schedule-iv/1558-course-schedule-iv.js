/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function checkIfPrerequisite(n, prerequisites, queries) {
    // Initialize the matrix
    const isPrerequisite = Array.from({ length: n }, () => Array(n).fill(false));

    // Set direct prerequisites
    for (const [a, b] of prerequisites) {
        isPrerequisite[a][b] = true;
    }

    // Compute transitive closure
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (isPrerequisite[i][k] && isPrerequisite[k][j]) {
                    isPrerequisite[i][j] = true;
                }
            }
        }
    }

    // Answer queries
    return queries.map(([u, v]) => isPrerequisite[u][v]);
}
