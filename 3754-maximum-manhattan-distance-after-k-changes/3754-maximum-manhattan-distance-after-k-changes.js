/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxDistance(s, k) {
    let x = 0, y = 0;
    const distances = [];

    for (let move of s) {
        if (move === 'N') y++;
        else if (move === 'S') y--;
        else if (move === 'E') x++;
        else if (move === 'W') x--;
        distances.push(Math.abs(x) + Math.abs(y));
    }

    if (k === 0) return Math.max(...distances);

    let maxDist = distances[1];
    let prev = distances[0];
    let addedBoost = 0;

    for (let i = 1; i < distances.length; i++) {
        if (distances[i] < prev && k > 0) {
            addedBoost += 2;
            k--;
        }
        prev = distances[i];
        distances[i] += addedBoost;
        maxDist = Math.max(maxDist, distances[i]);
    }

    return maxDist;
}