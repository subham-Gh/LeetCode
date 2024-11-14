/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let left = 1;
    let right = Math.max(...quantities);

    const isFeasible = (maxProducts) => {
        let requiredStores = 0;
        for (let quantity of quantities) {
            requiredStores += Math.ceil(quantity / maxProducts);
            if (requiredStores > n) return false; // Too many stores needed
        }
        return true;
    };

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (isFeasible(mid)) {
            right = mid;  // Try to minimize the maximum
        } else {
            left = mid + 1;  // Increase the allowed max products per store
        }
    }

    return left;
};