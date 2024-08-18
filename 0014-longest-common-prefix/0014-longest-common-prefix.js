/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        let currentStr = strs[i];
        
        while (currentStr.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};