/**
 * @param {string} boxes
 * @return {number[]}
 */
function minOperations(boxes) {
    const n = boxes.length;
    const result = new Array(n).fill(0);
    
    let count = 0, steps = 0;
    
    // Left to right pass
    for (let i = 0; i < n; i++) {
        result[i] += steps;
        count += boxes[i] === '1' ? 1 : 0;
        steps += count;
    }
    
    count = 0;
    steps = 0;
    
    // Right to left pass
    for (let i = n - 1; i >= 0; i--) {
        result[i] += steps;
        count += boxes[i] === '1' ? 1 : 0;
        steps += count;
    }
    
    return result;
}