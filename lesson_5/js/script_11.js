// 0. Значення
// Число від користувача 1 - userNumOne
// Число від користувача 2 - userNumTwo
// Сума непарних чисел - sumNumbers

//1. Введення необхідних даних
let userNumOne = parseInt(prompt("Введіть перше число"))
let userNumTwo = parseInt(prompt("Введіть друге число"))
let minNumber = userNumOne < userNumTwo ? userNumOne : userNumTwo
let maxNumber = userNumOne > userNumTwo ? userNumOne : userNumTwo
let sumNumbers = 0
let oddNumbers = 0

//2. Обчислення результату
for (let i = minNumber; i < maxNumber; i++) {
if (!(i % 2 === 0) && oddNumbers <= 5) {
    sumNumbers = sumNumbers + i;
    oddNumbers++;
} else if (oddNumbers === 5) break;
}

//3. Виведення результату
document.write(`Мінімальне число користувача ${minNumber}.<br>Максимальне число користувача ${maxNumber}.<br>Сума 5 непарних чисел ${sumNumbers}`)
