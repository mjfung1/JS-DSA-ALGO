// WHY TREES?? 
// html dom, computer directory, network routing
// BINARY SEARCH TREE AKA BST;
// Big O - BST
// Insertion/Searching - O ( log n )


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                            current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                            current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }

    }

    findIteratively (value) {
        if (this.root === null) return false;
        var current = this.root; 
        var found = false;

        while (current & !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }

        preorder() {
        const data = [];
        let current = this.root;

        function traverse(node) {
            if (!node) return;

              data.push(node.value);
            traverse(node.left);
            traverse(node.right)
        }
        
        traverse(current)
        return data;
    }

    inorder() {
        const data = [];

        function traverse(node) {
            if (!node) return;

            traverse(node.left);
              data.push(node.value);
            traverse(node.right)
        }

        traverse(this.root)
        return data;
    }

    postorder() {
        const data = [];

        function traverse(node) {
            if (!node) return;

            traverse(node.left);
            traverse(node.right);
              data.push(node.value)
        }

        traverse(this.root)
        return data;
    }

    levelOrder() {
        const queue = [this.root];
        const data = [];

        while (queue.length) {
            let size = queue.length;
            let level = [];
            while (size--) {
                let item = queue.shift();
                   level.push(item.value);
                if (item.left) queue.push(item.left);
                if (item.right) queue.push(item.right);
            }
              data.push(level)
        }

        return data;
    }

}

//        10
//    5        13
//  2   7    11   16