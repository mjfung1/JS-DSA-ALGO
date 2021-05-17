// Time - O(n) - linear time;
// Space - O(1) - constant space;

function addUpTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

// console.log(addUpTo(6))
console.log(addUpTo(1000000000000)) // takes long time
