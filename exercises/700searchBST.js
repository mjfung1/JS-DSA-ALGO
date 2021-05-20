// 700. Search in a Binary Search Tree

// Iterative
var searchBST = function(root, val) {
    
    while (root && root.val !== val) {
        if (root.val > val) root = root.left;
        else root = root.right;   
    }
    
    return root;
};

// Recursive
var searchBST = function(root, val) {
    if (!root) return null;
    if (root.val === val) return root;

    
    if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
    
};