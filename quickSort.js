// Quick Sort! This was tough.


const partition = (arr, start = 0, end = arr.length - 1) => {
    // Taking the last element as the pivot
    let pivotIndex = start;
    const pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
};

const quickSortRecursive = (arr, start, end) => {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    // Returns pivotIndex
    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

let array = [8,7,6,5,4,3,2,1,0]
quickSortRecursive(array, 0, array.length - 1)

console.log(array)
