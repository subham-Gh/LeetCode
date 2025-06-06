/**
 * @param {string} s
 * @return {string}
 */
function robotWithString(s) {
    const n = s.length;
    const count = new Array(26).fill(0);
    
    // Count the frequency of each character
    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }

    const stack = [];
    const result = [];
    let i = 0;

    let minChar = 0;

    while (i < n || stack.length > 0) {
        // Move stack top to result if it's <= smallest char left in s
        while (
            stack.length > 0 &&
            (i === n || stack[stack.length - 1] <= String.fromCharCode(minChar + 97))
        ) {
            result.push(stack.pop());
        }

        if (i < n) {
            const ch = s[i];
            stack.push(ch);
            count[ch.charCodeAt(0) - 97]--;
            i++;

            // Update minChar to the smallest character still in `s`
            while (minChar < 26 && count[minChar] === 0) {
                minChar++;
            }
        }
    }

    return result.join('');
}