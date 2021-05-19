function insertNodeAtHead(head, data) {
    let dummy = new SinglyLinkedListNode(data);
    dummy.next = head;
    
    return dummy;

}