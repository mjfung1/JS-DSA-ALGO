// BIG O
// INSERTION - 0(1) - PUSH & UNSHIFT
// REMOVAL - O(1) - POP & SHIFT
// SEARCHING = 0(N/2) -> O(N)
// ACCESS - O(N)

// WHY DLL?? 
// GOOD FOR STACK AND QUEUES. O(1)

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
        if (index < 0 || index >= this.length) return undefined;
        if (index <= this.length/2) {
            var count = 0;
            var current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            var count = this.length - 1;
            var current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
          return true;
        }
         return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
          beforeNode.next = newNode;
          newNode.prev = beforeNode;
         
          newNode.next = afterNode;
          afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var removedNode = this.get(index);
        var beforeNode = removedNode.prev
        var afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
        
    }
}

var list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push('last item')
list.push('lastest item')
// console.log(list.pop(), 'popppeddd')
// console.log(list.shift(), 'shiftteeeeedddd')
// console.log(list.unshift('the firstist'))

// console.log(list.set(0, 'the first ever'))
console.log(list)
// console.log(list.insert(1, 'IM INSERTION'))
console.log(list.remove(0), 'removeeddddd')