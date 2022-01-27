function bubbleSort(array) {
  let sortArray = array;

  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - j - 1; i++) {
      if (array[i] > array[i+1]) {
        let current = array[i];
        array[i] = array[i+1];
        array[i+1] = current;
      }
    }
  }

  return sortArray;
}

console.log(bubbleSort([6, 5, 3, 2, 1, 7]));
console.log(bubbleSort([56, 87, 18, 92, 42, 31, 44, 82, 36, 91]));