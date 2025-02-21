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
 */
class FindElements {
    constructor(root) {
        this.values = new Set();
        this.recover(root, 0);
    }
    
    recover(node, value) {
        if (!node) return;
        node.val = value;
        this.values.add(value);
        this.recover(node.left, 2 * value + 1);
        this.recover(node.right, 2 * value + 2);
    }

    find(target) {
        return this.values.has(target);
    }
}
