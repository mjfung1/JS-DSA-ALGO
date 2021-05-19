function deleteNode(llist, position) {
    // Write your code here
    if (position === 0) return llist.next
    let dummy = llist;
    while (position - 1) {
        llist = llist.next;
        position--;
    }
    llist.next = llist.next.next;
    return dummy;
}
