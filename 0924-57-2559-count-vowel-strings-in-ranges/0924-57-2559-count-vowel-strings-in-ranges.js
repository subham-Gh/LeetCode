/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */

var vowelStrings = function(words, queries) {
    const vowels = 'aeiou'
    const rs = []

    const prefix = Array(words.length+1).fill(0) 

    for(let i=0; i<words.length; i++){
        if(vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length-1])){
            prefix[i+1] = prefix[i] + 1
        }else{
            prefix[i+1] = prefix[i]
        }
    }
    
    for(const [start, end] of queries){
        rs.push(prefix[end+1] - prefix[start])
    }

    return rs
};