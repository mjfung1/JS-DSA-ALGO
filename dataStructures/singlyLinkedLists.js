class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            //update new tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let runner = this.head;
        let walker = runner;
        while (runner.next) {
            walker = runner;
            runner = runner.next;
        }
        this.tail = walker;
        this.tail.next = null;
        this.length--;
        //  walker.next = null;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return runner;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
              newNode.next = this.head;
            this.head = newNode;
            
        }
        this.length++;
        return this;
    }

}

let list = new SinglyLinkedList()
list.push('hello')
// list.push('there')
// list.push('?')
list.unshift('second')
// list.unshift('first')
console.log(list)

// console.log(list.pop(), 'popped')
// console.log(list.pop(), 'popped')
// console.log(list.pop(), 'popped')
console.log(list)