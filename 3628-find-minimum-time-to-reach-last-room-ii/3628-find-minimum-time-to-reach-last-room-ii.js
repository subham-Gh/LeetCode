/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
    const n = moveTime.length, m = moveTime[0].length;
    const d = Array.from({ length: n }, () => Array(m).fill(Infinity));
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    const q = new PriorityQueue((a, b) => a.dist - b.dist);
    q.enqueue({ x: 0, y: 0, dist: 0, move: 0 });
    d[0][0] = 0;

    while (!q.isEmpty()) {
        const { x, y, dist, move } = q.dequeue();

        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

            const waitTime = Math.max(dist, moveTime[nx][ny]);
            const travelTime = (move % 2 === 0) ? 1 : 2;
            const newDist = waitTime + travelTime;

            if (newDist < d[nx][ny]) {
                d[nx][ny] = newDist;
                q.enqueue({ x: nx, y: ny, dist: newDist, move: move + 1 });
            }
        }
    }

    return -1;
};