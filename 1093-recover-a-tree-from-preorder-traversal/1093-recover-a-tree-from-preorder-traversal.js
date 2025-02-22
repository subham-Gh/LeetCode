/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var recoverFromPreorder = function(traversal) {
    let stack = [];
    let i = 0;

    while (i < traversal.length) {
        let depth = 0;
        
        // Count number of dashes (depth)
        while (i < traversal.length && traversal[i] === '-') {
            depth++;
            i++;
        }
        
        // Extract number (node value)
        let num = 0;
        while (i < traversal.length && traversal[i] >= '0' && traversal[i] <= '9') {
            num = num * 10 + (traversal[i] - '0');
            i++;
        }
        
        let node = new TreeNode(num);
        
        // Find the correct parent
        while (stack.length > depth) {
            stack.pop();
        }
        
        if (stack.length) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }
        
        stack.push(node);
    }

    return stack[0];  // Root node
};