function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    // newArr = newArr.concat(collectOddValues(arr.slice(1)));
    newArr = [...newArr, ...collectOddValues(arr.slice(1))]
    return newArr;
};

console.log(collectOddValues([1,2,3,4,5,6]))
console.log(collectOddValues([1,2,3,5,2,2,3]))