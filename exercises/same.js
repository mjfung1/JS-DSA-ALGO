const same = (arr1, arr2) => {
    const freq = {};

    for (const num of arr1) {
        let newNum = num ** 2;
        freq[newNum] = ++freq[newNum] || 1;
    }
    for (const num of arr2) {
        if (!freq[num]) return false;
        freq[num]--;
    }
    return true;
};

console.log(same([2,2,4], [4,4,16])) // true
console.log(same([2,2,4], [4,4,16,16])) // false
console.log(same([1,2,3,2], [9,1,4,4])) // false