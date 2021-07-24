// why binary heaps? a type of binary tree
// used to implement priority queues - commonly used
// also for graph traversal algorithms
// similar but different from bst (leftChild - small) (rightChild - big)
// heaps are as compact as possible

// ways to implement heap??
// can use a tree but theres a much easier way thanks to its compactness;

// the answer is the array by using a formula;
// for parent n -> leftChild 2n+1 ; rightChild 2n+2
// INVERSELY, for any child n, its parents index Floor( (n-1) / 2 )

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        
        while (idx > 0) {
            let parentIdx = Math.floor( (idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        //Edge case
        const max = this.values[0];
        const end = this.values.popped();
        if (this.values.length > 0) {
            this.values[0] = end;s
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChild < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap !== null && rightChild > leftChild) ||
                    (swap === null && rightChild > element)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(40);
// heap.insert(30);
// heap.insert(80);
heap.insert(60);
console.log(heap);