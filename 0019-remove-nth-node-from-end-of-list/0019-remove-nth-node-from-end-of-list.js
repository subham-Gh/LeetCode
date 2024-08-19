/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node that points to the head
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize two pointers
    let fast = dummy;
    let slow = dummy;
    
    // Move the fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until the fast pointer reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the nth node
    slow.next = slow.next.next;
    
    // Return the head of the modified list
    return dummy.next;
};