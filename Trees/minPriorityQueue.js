// MIN HEAP

class MinPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let child = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx];
            if (child.priority >= parent.priority) break;
            this.values[parentIdx] = child;
            this.values[idx] = parent;
            idx = parentIdx; 
        }

    }

    dequeue() {        
         let min = this.values[0];
         let end = this.values.pop();
         if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
         }
         return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const parent = this.values[0];
        while(true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild.priority < parent.priority) swap = leftIdx
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (
                    (swap === null && rightChild.priority < parent.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightIdx;
                  }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = parent;
            idx = swap;

        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new MinPriorityQueue();
ER.enqueue('common cold', 5)
ER.enqueue('high on meth', 3)
ER.enqueue('gunshot', 1)
ER.enqueue('gunshot in spine', 1)
ER.enqueue('poked eye', 2)
ER.enqueue('vaccine', 3)
ER.enqueue('covid', 4)
// console.log(ER)

console.log(ER.dequeue())

console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER)