/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    // Priority queue using max-heap
    const heap = new MaxHeap();
    
    for (const [pass, total] of classes) {
        const improvement = (pass + 1) / (total + 1) - pass / total;
        heap.insert({ pass, total, improvement });
    }
    
    while (extraStudents--) {
        // Get the class with max improvement
        const { pass, total } = heap.extractMax();
        const newPass = pass + 1;
        const newTotal = total + 1;
        const newImprovement = (newPass + 1) / (newTotal + 1) - newPass / newTotal;
        heap.insert({ pass: newPass, total: newTotal, improvement: newImprovement });
    }
    
    // Compute the final average pass ratio
    let sum = 0;
    while (!heap.isEmpty()) {
        const { pass, total } = heap.extractMax();
        sum += pass / total;
    }
    
    return sum / classes.length;
}

// Example MaxHeap implementation (using array)
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(item) {
        this.heap.push(item);
        this._heapifyUp();
    }
    
    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return max;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].improvement <= this.heap[parentIndex].improvement) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    
    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let largest = index;

            if (leftIndex < length && this.heap[leftIndex].improvement > this.heap[largest].improvement) {
                largest = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex].improvement > this.heap[largest].improvement) {
                largest = rightIndex;
            }
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}