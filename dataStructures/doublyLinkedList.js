class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
              newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
              poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.length) return undefined;
        var removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
              removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
              newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;  
        }
        this.length++;
        return this;
    }

    get(index) {
        
    }
}

var list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push('last item')
list.push('lastest item')
// console.log(list.pop(), 'popppeddd')
// console.log(list.shift(), 'shiftteeeeedddd')
console.log(list.unshift('the firstist'))
console.log(list)