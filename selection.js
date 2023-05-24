function selectionSort(arr) {
    let i = 0;
    while (i < arr.length - 1) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        i++;
    }
    return arr;
}

module.exports = selectionSort;