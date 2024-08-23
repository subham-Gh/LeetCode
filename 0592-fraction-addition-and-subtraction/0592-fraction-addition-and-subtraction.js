/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    let fractions = expression.match(/[-+]?[0-9]+\/[0-9]+/g);
    let numerator = 0;
    let denominator = 1;

    for (let fraction of fractions) {
        let [num, denom] = fraction.split('/').map(Number);
        
        let commonDenom = lcm(denominator, denom);
        numerator = numerator * (commonDenom / denominator) + num * (commonDenom / denom);
        denominator = commonDenom;
    }

    let commonDivisor = gcd(Math.abs(numerator), denominator);
    return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
};

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}