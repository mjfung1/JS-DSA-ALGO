// LIFO - LAST IN FIRST OUT
// can implement with array or link list
// BIG O
// INSERTION - O(1) - MOST IMPORTANT
// REMOVAL - 0(1) - MOST IMPORTANT

// SEARCHING - O(N)
// ACCESS - O(N)

// WHY STACK - UNDO/REDO, INTERNET ROUTING HISTORY
// NO BUILT IN DS IN JS. BUT SIMPLE TO IMPLEMENT WITH ARRAY.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
              newNode.next = this.first;
            this.first = newNode;
            // var temp = this.first;
            // this.first = newNode;
            // this.first.next = temp;
        }

        this.size++;
        return this.size;

        // return ++this.size;
    }

    pop() {
        if (!this.first) return null;

        var poppedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = poppedNode.next;
        this.size--;
        // dont need it b/c we're returning value. no ref
        //  poppedNode.next = null;
        
        return poppedNode.val;
    }
}

let stack = new Stack();
stack.push('first')
stack.push('sec')
stack.push('third')
console.log(stack)
console.log(stack.pop())
// console.log(stack)
