// step 1 - figure out which number has most digits
// step 2 - loop from k=0 to largest number of digits
// step 3 - for each iteration of loop
//        - create buckets for each digit (0-9)
//        - place each number in bucket based on its kth digit
// step 4 - replace values in existing array with numbers in bucket

// BIG O
// TIME O(N+K)  SOME ARGUE O(N LOGN)
// SPACE 0(N+K)

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let index = getDigit(nums[i], k);
              digitBuckets[index].push(nums[i]);
        }
        nums = [].concat(...digitBuckets)
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
        maxDigits = Math.max(maxDigits, digitCount(num))
    }
    return maxDigits;
}

console.log(radixSort([123,1234,233,23123]))
// radixSort([123,1234,233,23123])
 