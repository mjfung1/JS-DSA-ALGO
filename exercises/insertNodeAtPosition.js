function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let dummy = llist;
    let i = 0;
    while (i < position - 1) {
        llist = llist.next;
        i++;
    }
    let newNode = new SinglyLinkedListNode(data);
    let temp = llist.next;
    llist.next = newNode;
    newNode.next = temp;
    
    
    return dummy;
}
