/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function longestSubsequenceRepeatedK(s, k) {
    const freq = {};
    for (const ch of s) freq[ch] = (freq[ch] || 0) + 1;

    const valid = Object.keys(freq)
        .filter(ch => freq[ch] >= k)
        .sort((a, b) => b.localeCompare(a));

    const isSubseq = (s, x) => {
        const repeated = x.repeat(k);
        let i = 0;
        for (const ch of s) {
            if (ch === repeated[i]) i++;
            if (i === repeated.length) return true;
        }
        return false;
    };

    const queue = [""];
    let result = "";

    while (queue.length) {
        const curr = queue.shift();
        for (const ch of valid) {
            const next = curr + ch;
            if (isSubseq(s, next)) {
                if (next.length > result.length || (next.length === result.length && next > result)) {
                    result = next;
                }
                queue.push(next);
            }
        }
    }

    return result;
}
