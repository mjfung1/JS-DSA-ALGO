// what is it?
//  - a data structure where each element 
//   has a priority; using a HEAP; 
// Big O
// Insertion, removal O(logN)
// Searching O(N) - generally, don't use PQ for searching
// for searching use BST not PQ.

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        
        while (idx > 0) {
            let parentIdx = Math.floor( (idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.popped();
        if (this.values.length > 0) {
            this.values[0] = end;s
            this.sinkDown();
        }

        return min;
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
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChild < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap !== null & rightChild.priority < leftChild.priority) ||
                    (swap === null & rightChild.priority < element.priority)
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

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.insertTime = Date.now();
    }
}