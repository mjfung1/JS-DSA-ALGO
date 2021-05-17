// BUILDS UP THE SORT BY GRADUALLY 
// CREATING A LARGER LEFT HALF WHICH IS 
// ALWAYS SORTED

// function insertionSort(arr) {
//     for (var i = 1; i < arr.length; i++) {
//         var currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//              arr[j+1] = arr[j]
//         }
//         console.log(j)
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// console.log(insertionSort([2,1,9,76,4]))


function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        // var allows for outside scope
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
          arr[j+1] = currentVal;
    }


    return arr;
}

console.log(insertionSort([2,1,9,76,4]))