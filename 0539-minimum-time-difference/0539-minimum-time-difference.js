/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const minutes = timePoints.map(time => {
        const [hours, mins] = time.split(':').map(Number);
        return hours * 60 + mins;
    });

    minutes.sort((a, b) => a - b);

    let minDifference = 1440;  // Maximum possible difference in minutes (24 * 60)

    // Compare differences between consecutive times
    for (let i = 1; i < minutes.length; i++) {
        minDifference = Math.min(minDifference, minutes[i] - minutes[i - 1]);
    }

    // Compare the wrap-around case (last time with the first time)
    minDifference = Math.min(minDifference, (1440 + minutes[0] - minutes[minutes.length - 1]) % 1440);

    return minDifference;
};