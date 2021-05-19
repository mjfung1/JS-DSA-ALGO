function CompareLists(llist1, llist2) {
    while (llist1 || llist2) {
        let val1 = llist1 ? llist1.data : Infinity;
        let val2 = llist2 ? llist2.data : Infinity;
        
        if (val1 !== val2) return false;
        
        llist1 = llist1 ? llist1.next : null;
        llist2 = llist2 ? llist2.next : null;
    }
    return true;
}
