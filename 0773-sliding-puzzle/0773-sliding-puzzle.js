/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const target = "123450";
    const start = board.flat().join("");
    const directions = [
        [1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]
    ];

    if (start === target) return 0;

    let beginSet = new Set([start]);
    let endSet = new Set([target]);
    let steps = 0;
    let visited = new Set();

    while (beginSet.size && endSet.size) {
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet];
        }

        const nextSet = new Set();

        for (const state of beginSet) {
            if (endSet.has(state)) return steps;

            visited.add(state);
            const zeroIndex = state.indexOf("0");

            for (const next of directions[zeroIndex]) {
                const nextState = state.split("");
                [nextState[zeroIndex], nextState[next]] = [nextState[next], nextState[zeroIndex]];
                const nextString = nextState.join("");

                if (!visited.has(nextString)) {
                    nextSet.add(nextString);
                }
            }
        }
        steps++;
        beginSet = nextSet;
    }
    return -1;
};