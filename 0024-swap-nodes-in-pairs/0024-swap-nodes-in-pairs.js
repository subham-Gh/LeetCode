/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
     // Create a dummy node to simplify edge cases
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  // Traverse the list and swap pairs
  while (current.next !== null && current.next.next !== null) {
    // Identify the two nodes to be swapped
    let first = current.next;
    let second = current.next.next;

    // Swap the nodes
    first.next = second.next;
    second.next = first;
    current.next = second;

    // Move the pointer two nodes ahead
    current = first;
  }

  // Return the new head of the list
  return dummy.next;
};