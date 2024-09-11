/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Function to reverse a portion of the linked list
  function reverse(head, k) {
    let prev = null;
    let curr = head;
    let next = null;

    while (k > 0) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      k--;
    }

    return prev;
  }

  // Dummy node to help with reversing the groups
  let dummy = new ListNode(0);
  dummy.next = head;
  let groupPrev = dummy;

  while (true) {
    // Find the kth node from the current position
    let kth = groupPrev;
    for (let i = 0; i < k; i++) {
      kth = kth.next;
      if (!kth) {
        return dummy.next; // If fewer than k nodes remain, return the list as it is
      }
    }

    // Reverse the k nodes
    let groupNext = kth.next;
    let prev = groupPrev.next;
    let curr = prev.next;

    kth.next = null; // Temporarily end the list at kth node
    groupPrev.next = reverse(prev, k);

    // Connect the reversed part with the remaining list
    prev.next = groupNext;
    groupPrev = prev;
  }
};