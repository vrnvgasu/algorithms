function quickSort(array, type = 'all') {
let sortArray = [];

if (array.length < 1) {
return [];
}

// Возвращаем массив из одного элемента
if (array.length === 1) {
return array;
}
// возвращаем отсоритованный массив их 2-х элементов
if (array.length === 2) {
if (array[0] > array [1]) {
sortArray = [array[1], array [0]];
} else {
sortArray = [array[0], array [1]];
}

return sortArray;
}


let medInd = Math.floor(array.length / 2)
let med = array[medInd];
let sortLeft = [];
let sortRigth = [];

for (let i = 0; i < array.length; i++) {
if (i === medInd) {
continue;
}

if (array[i] < med) {
sortLeft.push(array[i]);
} else {
sortRigth.push(array[i]);
}
}

// Левая отсорированная часть + опорный элемент + правая отсортированная часть
sortArray = [...sortArray, ...quickSort(sortLeft, 'sortLeft')];
sortArray.push(med);
sortArray = [...sortArray, ...quickSort(sortRigth, 'sortRigth')];

return sortArray;
}


// console.log(quickSort([6, 5, 3, 2, 1, 7]));
console.log(quickSort([56, 87, 18, 92, 42, 31, 44, 82, 36, 91]));
