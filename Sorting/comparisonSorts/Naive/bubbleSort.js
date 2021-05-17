// UN-OPTIMIZED
// RUNS UNTIL THE END EVERYTIME. EVEN WHEN SORTED ALREADY!!
// O(N2) QUADRATIC TIME. O(1) SPACE
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                //SWAP
                var temp = arr[j];
                   arr[j] = arr[j+1];
                   arr[j+1] = temp;
            }
        }
    }
    return arr;
}


// MORE OPTIMIZED
// DOES NOT RUN UNTIL THE END. KNOWS WHERE IT'S SORTED.
// THE WINDOW i GETS SMALLER AT EVERY ITERATION

function bubbleSortOptimized(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // ES6 SWAP
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}


function bubbleSortMostOptimed2(arr) {
    let noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // ES6 SWAP
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}




// WHILE LOOP. WHILE TRUE. 
// APP ACADEMY WAY
// STOPS ONCE IT'S SORTED. 
// THIS WILL BE BEST WHEN ONE NUMBER OUT OF PLACE.
// 2 ITERATIONS. 1ST TO PUT IN PLACE AND 
// 2ND ITERATION WILL NOT CHANGE NOT SORTED
const bubbleSortMostOptimized = (arr) => {
    let notSorted = true;

    while (notSorted) {
        notSorted = false
        
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            let nextNum = arr[i+1];

            if (num > nextNum) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                notSorted = true;
            }
        }
    }
    return arr;
};


console.log(bubbleSort([37, 45, 29, 8]))
console.log(bubbleSortOptimized([37, 45, 29, 8]))
console.log(bubbleSortMostOptimed2([37, 45, 29, 8]))
console.log(bubbleSortMostOptimized([37, 45, 29, 8]))