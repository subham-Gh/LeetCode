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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    const reverseLevels = (node1, node2, level) => {
        if (!node1 || !node2) return;

        if (level % 2 === 1) {
            // Swap values for odd levels
            [node1.val, node2.val] = [node2.val, node1.val];
        }

        // Traverse child nodes
        reverseLevels(node1.left, node2.right, level + 1);
        reverseLevels(node1.right, node2.left, level + 1);
    };

    if (root) {
        reverseLevels(root.left, root.right, 1);
    }

    return root;
};

// Example Usage:
function TreeNode(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(2, 
    new TreeNode(3, new TreeNode(8), new TreeNode(13)),
    new TreeNode(5, new TreeNode(21), new TreeNode(34))
);