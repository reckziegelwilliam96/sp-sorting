function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = radixSort;