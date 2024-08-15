/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let n = s.length;
    
    for (let i = 0; i < n; i++) {
        let currentVal = romanMap[s[i]];
        let nextVal = i < n - 1 ? romanMap[s[i + 1]] : 0;
        
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    
    return total;
};