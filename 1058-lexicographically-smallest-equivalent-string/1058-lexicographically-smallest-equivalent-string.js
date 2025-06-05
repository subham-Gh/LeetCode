/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const parent = new Array(26);

    // Initialize each character as its own parent
    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    const union = (x, y) => {
        let px = find(x);
        let py = find(y);
        if (px === py) return;
        if (px < py) {
            parent[py] = px;
        } else {
            parent[px] = py;
        }
    };

    // Union the characters from s1 and s2
    for (let i = 0; i < s1.length; i++) {
        let a = s1.charCodeAt(i) - 97;
        let b = s2.charCodeAt(i) - 97;
        union(a, b);
    }

    // Build result from baseStr using the smallest representative
    let result = '';
    for (let ch of baseStr) {
        let smallestCharIndex = find(ch.charCodeAt(0) - 97);
        result += String.fromCharCode(smallestCharIndex + 97);
    }

    return result;
};