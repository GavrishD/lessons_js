// 0. Значення
// Число 1 - num1
// Число 2 - num2
// Число 3 - num3
// Число 4 - num4
// Найбільше число 1 - maxNum1
// Найбільше число 2 - maxNum2

//1. Введення необхідних даних
const num1 = parseInt(prompt("Введіть перше число", "0"))
const num2 = parseInt(prompt("Введіть друге число", "0"))
const num3 = parseInt(prompt("Введіть третє число", "0"))
const num4 = parseInt(prompt("Введіть четверте число", "0"))

//2. Обчислення результату
let maxNum1 = num1
if (num2 >= maxNum1) maxNum1 = num2
if (num3 >= maxNum1) maxNum1 = num3
if (num4 >= maxNum1) maxNum1 = num4

let maxNum2;
if (num1 <= maxNum1) maxNum2 = num1
if (num2 >= maxNum2 && num2 < maxNum1) maxNum2 = num2
if (num3 >= maxNum2 && num3 < maxNum1) maxNum2 = num3
if (num4 >= maxNum2 && num4 < maxNum1) maxNum2 = num4

//3. Виведення результату
document.write(`Найбільші числа -> ${maxNum1} і ${maxNum2}. Усі числа: ${num1}, ${num2}, ${num3}, ${num4}`);
