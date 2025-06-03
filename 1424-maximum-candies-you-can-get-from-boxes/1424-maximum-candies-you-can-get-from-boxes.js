/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let cnt = 0;
    let q = [...initialBoxes];
    while (q.length > 0){
        const sz = q.length;
        const curr = [];
        const inserted = [];
        for (let i = 0; i < sz; i++){
            const box = q.shift();
            curr.push(box);
            if (status[box] === 1){
                cnt += candies[box];
                for (const k of keys[box]){
                    status[k] = 1;
                }
                for (const other of containedBoxes[box]){
                    q.push(other);
                }
            } else {
                q.push(box);
                inserted.push(box);
            }
        }
        if (curr.length === inserted.length && curr.every((v, idx) => v === inserted[idx])){
            break;
        }
    }
    return cnt;
};