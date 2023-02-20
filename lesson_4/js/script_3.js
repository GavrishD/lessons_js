// 0. Значення
// Число 1 - num1
// Число 2 - num2
// Число 3 - num3
// Число 4 - num4
// Найменше число 1 - maxNum1
// Найменше число 2 - maxNum2

//1. Введення необхідних даних
const num1 = parseInt(prompt("Введіть перше число", "0"))
const num2 = parseInt(prompt("Введіть друге число", "0"))
const num3 = parseInt(prompt("Введіть третє число", "0"))
const num4 = parseInt(prompt("Введіть четверте число", "0"))

//2. Обчислення результату
let minNum1 = Infinity
if (num1 > 0 && num1 < minNum1) minNum1 = num1
if (num2 > 0 && num2 < minNum1) minNum1 = num2
if (num3 > 0 && num3 < minNum1) minNum1 = num3
if (num4 > 0 && num4 < minNum1) minNum1 = num4

let minNum2
if (num1 >= minNum1) minNum2 = num1
if (num2 <= minNum2 && num2 > minNum1) minNum2 = num2
if (num3 <= minNum2 && num3 > minNum1) minNum2 = num3
if (num4 <= minNum2 && num4 > minNum1) minNum2 = num4

//3. Виведення результату
document.write(`Найменші числа -> ${minNum1} і ${minNum2}. Усі числа: ${num1}, ${num2}, ${num3}, ${num4}`)