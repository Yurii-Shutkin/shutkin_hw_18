const numArr = [1, -3, 5, 6, -7, 8, 9, -11];
const stringsArr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const subArr = [1, 2, [3, 4], 5, [6, 7]];
const someArr = [5, -3, 6, -5, 0, -7, 8, 9];

// Task 16
const positiveNumberArr = numArr.filter(item => item > 0);
console.log(positiveNumberArr);

// Task 17
const evenNumberArr = numArr.filter(item => item % 2 === 0);
console.log(evenNumberArr);

// Task 18
const lengthMoreFive = stringsArr.filter(item => item.length > 5);
console.log(lengthMoreFive);

// Task 19
const arrays = subArr.filter(item => Array.isArray(item));
console.log(arrays);

// Task 20
const negativeNumArr = someArr.filter(item => item < 0);
console.log(negativeNumArr.length);