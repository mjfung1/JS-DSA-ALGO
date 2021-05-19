function insertNodeAtTail(head, data) {
    let dummy = new SinglyLinkedListNode(0)
    dummy.next = head;
    
    let runner = dummy.next;
    let walker = dummy;
    
    while (runner) {
        runner = runner.next;
        walker = walker.next;
    }
    
    walker.next = new SinglyLinkedListNode(data);
    
    return dummy.next;

}