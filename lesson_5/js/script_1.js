// 0. Значення
// Кількість випадкових чисел від користувача - userNumber
// Мінімальне випадкове число - NUMBER_MIN
// Максимальне випадкове число - NUMBER_MAX


//1. Введення необхідних даних
const userNumber = parseInt(prompt("Кількість випадкових чисел ->"))
const NUMBER_MIN = 1
const NUMBER_MAX = 100

let listItems = " "

//2. Обчислення результату
for (let i = 1; i <= userNumber; i++) {
    const randomNumber = Math.floor(NUMBER_MIN + Math.random() * NUMBER_MAX)
    listItems += ` №${i} з випадковим числом: ${randomNumber}.`
}


//3. Виведення результату
document.write(`Кількість випадкових чисел ${userNumber}.<br>Мінімальне випадкове число ${NUMBER_MIN}.<br>Максимальне випадкове число ${NUMBER_MAX}.<br>${listItems}`)

