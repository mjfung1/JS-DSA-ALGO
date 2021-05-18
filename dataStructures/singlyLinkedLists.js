// BIG O
// Insertion - O(1)
// Removal - depends - O(1)[SHIFT] or O(n)[POP]
// Searching - O(n)
// Access - (n)

// THE IDEA OF A LIST DATA STRUCTURE THAT CONSISTS OF NODES IS
// THE FOUNDATION FOR OTHER DATA STRUCTURES LIKE STACKS & QUEUES;

// SINGLE LINKED LISTS ARE GOOD WHEN INSERSTION & DELETION ARE FREQUENTLY REQUIRED;

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
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;

        //  previousNode.next = previousNode.next.next;
         previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        // [this.head, this.tail] = [this.tail, this.head]
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        // var prev = null;
        // while(node) {
        //     var temp = node.next;
        //       node.next = prev;
        //     prev = node;
        //     node = temp;
        // }

        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++){
            next = node.next;
              node.next = prev;
            prev = node;
            node = next;

        }
        
        return this;
    }

    print() {
        const arr = [];
        var current = this.head;
        while(current) {
              arr.push(current.val)
            current = current.next;
        }

        console.log(arr);
    }


    
}

let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
// list.get(3)
console.log(list)
// list.remove(1)
// console.log(list.remove(1))
list.print()
list.reverse()
console.log(list,'reversed')
list.print()
// console.log(list.get(0))
// console.log(list.head)