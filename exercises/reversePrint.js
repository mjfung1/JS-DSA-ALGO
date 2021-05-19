function reversePrint(llist) {
    // Write your code here
    let prev = null;
    
    while (llist) {
        let temp = llist.next;
        llist.next = prev;
        prev = llist;
        llist = temp;
    }
    
    while(prev) {
        console.log(prev.data)
        prev = prev.next;
    }
}
