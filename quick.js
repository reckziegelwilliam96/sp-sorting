/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start, end){
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            let temp = arr[swapIndex];
            arr[swapIndex] = arr[i];
            arr[i] = temp;
        }
    }
    let temp = arr[swapIndex];
    arr[swapIndex] = arr[start];
    arr[start] = temp;
    return swapIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left, right) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = quickSort;