class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor() {
       this.root = new Node();
   }

   insertRecur(word, root = this.root) {
        const letter = word[0];

        if (!root.children[letter]) {
            root.children[letter] = new Node();
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
            return;
        } 

        this.insertRecur(word.slice(1), root.children[letter])
    
   }

    insertIter(word) {
        let root = this.root;

        for (const letter of word) {
            if (!root.children[letter]) {
                root.children[letter] = new Node();
            }
            root = root.children[letter];
        }
        root.isTerminal = true;

   }

   searchRecur(word, root = this.root) {
       let letter = word[0]
       if (!root.children[letter]) return false;
        
       if (word.length === 1) {
           if (root.children[letter].isTerminal) return true;
       }

       return this.searchRecur(word.slice(1), root.children[letter])

   }

   searchIter(word) {
       let root = this.root;
    
       for (const letter of word) {
           if (!root.children[letter]) {
               return false;
           } 
            root = root.children[letter]
       }
       return root.isTerminal;
   }

   wordsWithPrefix(prefix) {
       root = this.root;

       const arr = [];
       for (const child in root.children) {
            let result = '';
            result += child;
            
       }
       return arr;
   }

}

module.exports = {
    Node,
    Trie
};