class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
};

var pq = new PriorityQueue();
pq.enqueue('fever', 4)
pq.enqueue('covid', 2)
pq.enqueue('check-up', 5)
pq.enqueue('gunshot', 1)
console.log(pq.dequeue())
console.log(pq)