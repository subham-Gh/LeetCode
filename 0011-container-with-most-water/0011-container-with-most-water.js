/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_area = 0;

    while (left < right) {
        // Calculate the width between the two pointers
        const width = right - left;
        // Calculate the area of the container formed by the two lines
        const current_area = Math.min(height[left], height[right]) * width;
        // Update max_area if the current_area is larger
        max_area = Math.max(max_area, current_area);

        // Move the pointer corresponding to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max_area;
};