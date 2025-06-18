function divideArray(nums, k) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];

    for (let i = 0; i < nums.length; i += 3) {
        const group = nums.slice(i, i + 3);
        if (group[2] - group[0] > k) {
            return []; // Return empty if difference exceeds k
        }
        result.push(group);
    }

    return result;
}
