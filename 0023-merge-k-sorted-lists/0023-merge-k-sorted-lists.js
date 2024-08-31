/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this._heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val <= this.heap[index].val) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    while (2 * index + 1 < this.heap.length) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smaller = left;
      if (right < this.heap.length && this.heap[right].val < this.heap[left].val) {
        smaller = right;
      }
      if (this.heap[index].val <= this.heap[smaller].val) break;
      [this.heap[index], this.heap[smaller]] = [this.heap[smaller], this.heap[index]];
      index = smaller;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();
  
  // Push the first node of each list into the heap
  for (let list of lists) {
    if (list) {
      minHeap.insert(list);
    }
  }
  
  const dummy = new ListNode(0);
  let current = dummy;

  // Extract the smallest node and push the next node from the same list into the heap
  while (!minHeap.isEmpty()) {
    const minNode = minHeap.extractMin();
    current.next = minNode;
    current = current.next;
    if (minNode.next) {
      minHeap.insert(minNode.next);
    }
  }

  return dummy.next;
}

// Helper function to convert array to linked list
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Example usage:
const lists = [
  arrayToList([1, 4, 5]),
  arrayToList([1, 3, 4]),
  arrayToList([2, 6])
];
const result = mergeKLists(lists);

// Helper function to print the linked list
function printList(node) {
  const res = [];
  while (node) {
    res.push(node.val);
    node = node.next;
  }
  console.log(res);
}