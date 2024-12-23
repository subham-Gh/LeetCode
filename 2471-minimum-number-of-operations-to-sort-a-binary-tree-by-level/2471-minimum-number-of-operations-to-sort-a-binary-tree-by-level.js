/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
    // Helper function to perform BFS and gather levels
    const getLevels = (root) => {
        const levels = [];
        const queue = [root];
        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = [];
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            levels.push(level);
        }
        return levels;
    };

    // Helper function to calculate minimum swaps using cycle detection
    const minSwaps = (arr) => {
        const n = arr.length;
        const pairs = arr.map((value, index) => [value, index]);
        pairs.sort((a, b) => a[0] - b[0]); // Sort based on values
        const visited = new Array(n).fill(false);
        let swaps = 0;

        for (let i = 0; i < n; i++) {
            if (visited[i] || pairs[i][1] === i) continue; // Already sorted or visited

            let cycleSize = 0;
            let j = i;

            while (!visited[j]) {
                visited[j] = true;
                j = pairs[j][1];
                cycleSize++;
            }

            if (cycleSize > 1) swaps += cycleSize - 1;
        }

        return swaps;
    };

    const levels = getLevels(root);
    let totalSwaps = 0;

    for (const level of levels) {
        totalSwaps += minSwaps(level);
    }

    return totalSwaps;
};

// Example Usage
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

// Create a binary tree for testing
const root = new TreeNode(1, 
    new TreeNode(4, new TreeNode(7), new TreeNode(6)), 
    new TreeNode(3, new TreeNode(8), new TreeNode(9))
);