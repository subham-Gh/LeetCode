/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skills) {
    let n = skills.length;

    // Sort the skills array to facilitate pairing.
    skills.sort((a, b) => a - b);

    let totalSum = skills.reduce((acc, skill) => acc + skill, 0);
    
    // Calculate the desired team sum: the total sum of skills must be divisible by (n / 2)
    let teamSum = totalSum / (n / 2);
    
    // If the total sum is not divisible by (n / 2), it's impossible to form equal teams.
    if (totalSum % (n / 2) !== 0) {
        return -1;
    }

    let result = 0;
    let left = 0;
    let right = n - 1;

    // Try to form teams by pairing the smallest and largest skill players
    while (left < right) {
        if (skills[left] + skills[right] !== teamSum) {
            return -1;  // If any pair doesn't sum up to the required teamSum, return -1.
        }
        result += skills[left] * skills[right];  // Calculate the product of the pair
        left++;
        right--;
    }

    return result;
};