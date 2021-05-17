const countUniqueValues = (nums) => {
    if (nums.length === 0) return 0;
    let unique = 1;
    let left = 0;
    let right = 1;

    while (right < nums.length) {
        if (nums[left] !== nums[right]) {
            unique++;
           
        }
            left++;
            right++
    }

    return unique;
};

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,1,2,3,4,5,5]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))