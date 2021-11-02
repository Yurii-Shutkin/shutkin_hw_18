const arr1 = [3, 4, 1, 2, 7];
const arr2 = [5, 6, 7, 8, 9];

// Task 13
arr1.sort((a, b) => a - b);
console.log(arr1);

// Task 14
// let sumArrElem = 0;
// arr2.forEach(item => sumArrElem += item);
// console.log(sumArrElem);

const sumArrElem = arr2.reduce(function(previousValue, item, index, array) {
    return item + previousValue;
}, 0)
console.log(sumArrElem);

// Task 15
arr2.forEach((item, index, arr) => arr[index] = Math.pow(item, 2));
console.log(arr2);  