// 0. Значення
// Число 1 - num1
// Число 2 - num2
// Число 3 - num3
// Число 4 - num4
// Число 5 - num5
// Сума всіх чисел - sumNumbers
// Середнє арифметичне - average
// Найбільше число - largestNumber

//1. Введення необхідних даних
let num1 = parseInt(prompt('Введіть перше число', '0'))
let num2 = parseInt(prompt("Введіть друге число", "0"))
let num3 = parseInt(prompt("Введіть третє число", "0"))
let num4 = parseInt(prompt("Введіть четверте число", "0"))
let num5 = parseInt(prompt("Введіть п'яте число", "0"))

const amountOfNumbers = 5 // Кількість чисел

//2. Обчислення результату
let sumNumbers = num1 + num2 + num3 + num4 + num5
let average = sumNumbers / amountOfNumbers

let largestNumber = -Infinity
if (num1 <= average && num1 > largestNumber) largestNumber = num1
if (num2 <= average && num2 > largestNumber) largestNumber = num2
if (num3 <= average && num3 > largestNumber) largestNumber = num3
if (num4 <= average && num4 > largestNumber) largestNumber = num4
if (num5 <= average && num5 > largestNumber) largestNumber = num5

//3. Виведення результату
document.write(`Найбільше число -> ${largestNumber}. Усі числа: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}, їх сума ${sumNumbers}, середнє арифметичне ${average}`)

