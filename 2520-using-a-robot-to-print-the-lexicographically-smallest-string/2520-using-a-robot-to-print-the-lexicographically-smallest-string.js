/**
 * @param {string} s
 * @return {string}
 */
const robotWithString = (s) => {
    const count = Array(26).fill(0);
    let min = 0;
    const output = [];
    const buffer = [];

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
    }

    while (min < 26 && count[min] === 0) min++;

    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        const idx = ch.charCodeAt(0) - 97;

        if (idx === min) {
            output.push(ch);
            count[idx]--;
            if (count[idx] === 0) {
                while (min < 26 && count[min] === 0) min++;
                while (
                    min < 26 &&
                    buffer.length > 0 &&
                    buffer[buffer.length - 1].charCodeAt(0) <= min + 97
                ) {
                    output.push(buffer.pop());
                }
            }
        } else {
            buffer.push(ch);
            count[idx]--;
        }
    }

    buffer.reverse();
    return output.concat(buffer).join('');
};