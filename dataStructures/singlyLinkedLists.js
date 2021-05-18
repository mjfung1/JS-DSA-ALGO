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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
              foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        // -1 because we need the previous node;
        var prev = this.get(index - 1);
        var temp = prev.next;
         prev.next = newNode;
         newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        
    }
    
}

let list = new SinglyLinkedList()
list.push('HELLO')
list.push('GOODBYE')
list.push('!')
list.push('<3')
list.push(':)')
// list.get(3)
console.log(list)
console.log(list.insert(5, 'hello2'))
// console.log(list)
// console.log(list.get(0))
// console.log(list.head)