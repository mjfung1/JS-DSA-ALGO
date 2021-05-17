class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    // bubbleUp() {
    //     let idx = this.values.length - 1;
    //     let child = this.values[idx];
    //     while(true) {
    //         let parentIdx = Math.floor((idx - 1) / 2)
    //         let parent = this.values[parentIdx];
    //         if (child > parent) {
    //             this.values[parentIdx] = child;
    //             this.values[idx] = parent;
    //             idx = parentIdx;
    //         } else {
    //             return
    //         }
    //     }

    // }
    bubbleUp() {
        let idx = this.values.length - 1;
        let child = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx];
            if (child <= parent) break;
            this.values[parentIdx] = child;
            this.values[idx] = parent;
            idx = parentIdx; 
        }

    }

    extractMax() {        
         let max = this.values[0];
         let popped = this.values.pop();
         if (this.values.length > 0) {
            this.values[0] = popped;
            this.sinkDown();
         }
         return max;
    }

    // MY IMPLEMENTATION 
    // sinkDown() {
    //     let idx = 0;
    //     while (idx <= this.values.length-1) {
    //         let leftIdx = (2 * idx) + 1;
    //         let rightIdx = (2 * idx) + 2;
    //         let leftChild = this.values[leftIdx];
    //         let rightChild = this.values[rightIdx];
    //         let parent = this.values[idx]
    //         if (parent < leftChild && parent < rightChild) {
    //             if (leftChild > rightChild) {
    //                 this.values[idx] = leftChild;
    //                 this.values[leftIdx] = parent;
    //                 idx = leftIdx
    //             } else {
    //                 this.values[idx] = rightChild;
    //                 this.values[rightIdx] = parent;
    //                 idx = rightIdx
    //             }
    //         } else if (parent < leftChild) {
    //               this.values[idx] = leftChild;
    //               this.values[leftIdx] = parent;
    //               idx = leftIdx
    //         } else if (parent < rightChild) {
    //               this.values[idx] = rightChild;
    //               this.values[rightIdx] = parent;
    //               idx = rightIdx
    //         } else {
    //             return;
    //         }
    //     }
    // }

    // VIDEOS IMPLEMENTATION. SHORTER!!!
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
                if (leftChild > parent) swap = leftIdx
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (
                    (swap === null && rightChild > parent) ||
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
console.log(heap, 'before')
// heap.insert(55)
heap.extractMax()

console.log(heap, 'after1')
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()

console.log(heap.extractMax())





console.log(heap, 'after2')