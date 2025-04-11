/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countSymmetricIntegers(low, high) {
    let count = 0;

    for (let i = low; i <= high; i++) {
        const str = i.toString();
        if (str.length % 2 === 0) {
            const mid = str.length / 2;
            const firstHalf = str.slice(0, mid);
            const secondHalf = str.slice(mid);
            
            const sum = s => [...s].reduce((acc, digit) => acc + Number(digit), 0);
            
            if (sum(firstHalf) === sum(secondHalf)) {
                count++;
            }
        }
    }

    return count;
}