let arr = [1, 3, 2, 5, 7, 3, 1, 2];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr
}
// insertionSort(arr)
console.log(insertionSort(arr));
