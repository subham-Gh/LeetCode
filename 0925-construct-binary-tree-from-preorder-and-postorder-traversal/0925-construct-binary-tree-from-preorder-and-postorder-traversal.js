/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var constructFromPrePost = function(preorder, postorder) {
    let preIndex = 0, postIndex = 0;

    function buildTree() {
        let root = new TreeNode(preorder[preIndex++]);

        if (root.val !== postorder[postIndex]) {
            root.left = buildTree();
        }
        if (root.val !== postorder[postIndex]) {
            root.right = buildTree();
        }

        postIndex++;
        return root;
    }

    return buildTree();
};