class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
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
            let unfound = true;
            while (unfound) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                            current.left = newNode;
                        unfound = false;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (!current.right) {
                            current.right = newNode;
                        unfound = false;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    // RECURSIVE!!!
    // find(value) {
    //     function findVal(roots, val) {
    //         if (!roots) return undefined;
    //         if (roots.value === val) return roots;

    //         if (roots.value < val) {
    //             return findVal(roots.right, val)
    //         }
    //         if (roots.value > val) {
    //             return findVal(roots.left, val)
    //         }
    //     }

    //     return findVal(this.root, value)
    // }

    // ITERATIVE!!!
    find(value) {
        if (this.root === null) return false;
        var current = this.root;
        let notFound = true;
        while (current && notFound) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                notFound = false;
            }
        }
        if (notFound) return undefined;
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

 var tree = new BST();
 tree.insert(10)
 tree.insert(6)
 tree.insert(15)
 tree.insert(3)
 tree.insert(8)
 tree.insert(20)
console.log(tree)
console.log(tree.preorder(), 'preorder')
console.log(tree.inorder(), 'inorder')
console.log(tree.postorder(), 'postorder')
console.log(tree.levelOrder(), 'levelorder')

// console.log(tree)
 