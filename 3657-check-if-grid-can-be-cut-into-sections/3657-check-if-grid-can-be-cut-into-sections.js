/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
    return canCut(rectangles, 0) || canCut(rectangles, 1);
};

function canCut(rectangles, axis) {
    rectangles.sort((a, b) => a[axis] - b[axis]);
    let cuts = 0, previousEnd = -1;

    for (let rect of rectangles) {
        let start = rect[axis], end = rect[axis + 2];

        if (start >= previousEnd) cuts++;
        previousEnd = Math.max(previousEnd, end);
        if (cuts >= 3) return true;
    }

    return false;
}