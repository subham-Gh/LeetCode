/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
  const EPS = 1e-6;

  const backtrack = (nums) => {
    if (nums.length === 1) return Math.abs(nums[0] - 24) < EPS;

    const n = nums.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const rest = [];
        for (let k = 0; k < n; k++) {
          if (k !== i && k !== j) rest.push(nums[k]);
        }

        const a = nums[i], b = nums[j];

       
        const candidates = [];
        candidates.push(a + b);        // + 
        candidates.push(a - b);        // -
        candidates.push(b - a);        // -
        candidates.push(a * b);        // * 
        if (Math.abs(b) > EPS) candidates.push(a / b); 
        if (Math.abs(a) > EPS) candidates.push(b / a); 

        for (const x of candidates) {
          rest.push(x);
          if (backtrack(rest)) return true;
          rest.pop();
        }
      }
    }
    return false;
  };

  return backtrack(cards.map(x => x * 1.0));
};