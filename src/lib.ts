let arr = [5, 2, -1, 7, -4];
let isPositive = (num: number) => num > 0;
let positiveArr = arr.every(isPositive);
module.exports = positiveArr;
