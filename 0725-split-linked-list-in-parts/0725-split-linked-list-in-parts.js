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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    // Find the total length of the linked list
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // Calculate the size of each part and the remainder
  const baseSize = Math.floor(length / k);
  const remainder = length % k;

  // Initialize an array to hold the result
  const result = new Array(k).fill(null);
  current = head;
  let prev = null;

  // Split the list into k parts
  for (let i = 0; i < k && current; i++) {
    result[i] = current;
    let partSize = baseSize + (i < remainder ? 1 : 0);

    // Move forward by partSize nodes
    for (let j = 0; j < partSize; j++) {
      prev = current;
      current = current.next;
    }

    // Break the current part from the rest of the list
    if (prev) {
      prev.next = null;
    }
  }

  return result;

};