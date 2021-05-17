const sumZero = (nums) => {
    const pairs = []
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // if (nums[left] > 0) return pairs;
        let sum = nums[left] + nums[right];
        if (sum === 0) {
            pairs.push([nums[left], nums[right]])
            left++;
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    };
    console.log('no neg')
    return pairs;
};

console.log(sumZero([-3,-2,-1,0,1,2,3,]))
console.log(sumZero([-2,0,1,2,3,]))
console.log(sumZero([1,2,3,]))