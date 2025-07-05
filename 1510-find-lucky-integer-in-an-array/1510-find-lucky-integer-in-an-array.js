/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = (numbers) => {
    const frequency = new Map();

    for (const num of numbers) {
        frequency.set(num, (frequency.get(num) ?? 0) + 1);
    }

    let result = -1;
    for (const [num, count] of frequency) {
        if (num === count && num > result) {
            result = num;
        }
    }

    return result;
};