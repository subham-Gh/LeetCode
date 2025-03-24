/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let prevEnd = 0;

    for (let [start, end] of meetings) {
        start = Math.max(start, prevEnd + 1);
        let length = end - start + 1;
        days -= Math.max(length, 0);
        prevEnd = Math.max(prevEnd, end);
    }

    return days;
};