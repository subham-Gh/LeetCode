/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const N = board.length;
    
    // Convert square number (1-indexed) to coordinates (row, col)
    function getCoordinates(s) {
        let row = Math.floor((s - 1) / N);
        let col = (s - 1) % N;
        if (row % 2 === 1) {
            col = N - 1 - col;
        }
        return [N - 1 - row, col];
    }

    let visited = Array(N * N + 1).fill(false);
    let queue = [[1, 0]]; // [square, moves]
    visited[1] = true;

    while (queue.length > 0) {
        const [s, moves] = queue.shift();
        for (let i = 1; i <= 6; i++) {
            let next = s + i;
            if (next > N * N) continue;
            let [r, c] = getCoordinates(next);
            if (board[r][c] !== -1) {
                next = board[r][c];
            }
            if (next === N * N) return moves + 1;
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, moves + 1]);
            }
        }
    }

    return -1;
};
