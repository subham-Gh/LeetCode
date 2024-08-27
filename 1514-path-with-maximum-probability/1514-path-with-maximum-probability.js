/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
function maxProbability(n, edges, succProb, start, end) {
    let graph = new Map();
    
    // Build the graph
    for (let i = 0; i < edges.length; i++) {
        let [a, b] = edges[i];
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push([b, succProb[i]]);
        graph.get(b).push([a, succProb[i]]);
    }
    
    // Max-heap (priority queue) for Dijkstra's algorithm
    let heap = new MaxHeap();
    heap.insert([start, 1]);
    
    // Array to keep track of the maximum probability to reach each node
    let probabilities = Array(n).fill(0);
    probabilities[start] = 1;
    
    // Dijkstra's algorithm
    while (!heap.isEmpty()) {
        let [currentNode, currentProb] = heap.extractMax();
        
        if (currentNode === end) {
            return currentProb;
        }
        
        for (let [neighbor, prob] of (graph.get(currentNode) || [])) {
            let newProb = currentProb * prob;
            if (newProb > probabilities[neighbor]) {
                probabilities[neighbor] = newProb;
                heap.insert([neighbor, newProb]);
            }
        }
    }
    
    return 0;
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(pair) {
        this.heap.push(pair);
        this.bubbleUp();
    }
    
    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            
            if (element[1] <= parent[1]) break;
            
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
    
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[1] > element[1]) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[1] > element[1]) ||
                    (swap !== null && rightChild[1] > leftChild[1])
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (swap === null) break;
            
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}