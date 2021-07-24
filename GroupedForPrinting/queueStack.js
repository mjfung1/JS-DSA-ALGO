const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr.pop();
  let left = arr.filter((num) => num < pivot);
  let right = arr.filter((num) => num >= pivot);
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
};



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
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }
  return merged;
};

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let index = getDigit(nums[i], k);
      digitBuckets[index].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}