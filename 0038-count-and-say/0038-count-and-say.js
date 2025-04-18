/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    if (n === 1) return "1";
    
    let result = "1";
    
    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;
        
        for (let j = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++;
            } else {
                temp += count.toString() + result[j];
                count = 1;
            }
        }
        
        result = temp;
    }
    
    return result;
}

// Example:
console.log(countAndSay(5)); // Output: "111221"
