/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
    const n = days.length;
    const maxDay = days[n - 1];
    const travelDays = new Set(days); // To quickly check if a day is a travel day
    const dp = new Array(maxDay + 1).fill(0);

    for (let i = 1; i <= maxDay; i++) {
        if (!travelDays.has(i)) {
            dp[i] = dp[i - 1]; // If it's not a travel day, no extra cost
        } else {
            dp[i] = Math.min(
                dp[i - 1] + costs[0], // 1-day ticket
                dp[Math.max(0, i - 7)] + costs[1], // 7-day ticket
                dp[Math.max(0, i - 30)] + costs[2] // 30-day ticket
            );
        }
    }

    return dp[maxDay];
}