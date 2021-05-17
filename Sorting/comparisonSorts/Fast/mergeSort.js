const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
};

const merge = (arr1, arr2) => {
    let merged = [];
    while (arr1.length > 0 || arr2.length > 0) {
        let ele1 = arr1.length ? arr1[0] : Infinity;
        let ele2 = arr2.length ? arr2[0] : Infinity;


        if (ele1 < ele2) {
            merged.push(arr1.shift())
        } else {
            merged.push(arr2.shift())
        }
    }
    return merged;
}

console.log(mergeSort([7,4,8,2,4,9,1]))