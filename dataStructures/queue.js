// WHY QUEUE??
// background tasks, printing/task processing
// FIFO - FIRST IN FIRST OUT
// BIG O 
// INSERTION/REMOVAL - O(1);  TAKEAWAY - MOST IMPORTANT
// SEARCHING/ACCESS - O(N);
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// trick with link list
// add to the end & remove from start
// doesn't work the other way around

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        var removedNode = this.first;

        if (this.size === 1) {
            this.last = null;
        }

        // this.first = removedNode.next;
        this.first = this.first.next;
        this.size--;
        return removedNode.val;
    }
}

var queue = new Queue();
queue.enqueue('first')
queue.enqueue('sec')
queue.enqueue('third')
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())