/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if (numFriends === 1){
        return word;
    }
    const n = word.length;
    const m = n - numFriends + 1;
    let i = 0, j = 1;
    while (j < n){
        let k = 0;
        while (j + k < n && word.charAt(i + k) === word.charAt(j + k)){
            k++;
        }
        if (j + k < n && word.charAt(i + k) < word.charAt(j + k)){
            let temp = i;
            i = j;
            j = Math.max(j + 1, temp + k + 1);
        } else {
            j += k + 1;
        }
    }
    let s = word.substring(i);
    return s.length <= m ? s : s.substring(0, m);
};