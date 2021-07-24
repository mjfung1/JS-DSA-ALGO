// Time Complexity: O(log(n))
// Space Complexity: O(n)

// Why Binary Search?
// Use this algorithm when the input data is sorted!!! 


// Colt Steele
const binarySearch = (arr, elem) => {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
};


// Variation
var binarySearch = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let midVal = nums[mid];
        
        if (midVal === target) {
            return mid;
        } else if (midVal > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    } 
    return -1;
};

// Alvins
function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}

