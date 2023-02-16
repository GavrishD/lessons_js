//0. Значення
//Число від користувача (перша спроба) - numberUser
//Число від користувача (друга спроба) - numUser

//1. Введення необхідних даних
let numberUser = parseInt(prompt('Введіть число від 1 до 5. У вас дві спроби вгадати число.', '1'))

//2. Обчислення рандомного числа (від 1 до 5)
let randomNumber = Math.floor(Math.random() * 5) + 1

//3. Виведення результату
if (numberUser === randomNumber)
document.write(`Ура! Ви вгадали число :)`)
else {
alert(`Жаль, але ви не вгадали число. Залишилася одна спроба.`)

let numUser = parseInt(prompt('Введіть число від 1 до 5. У вас дві спроби вгадати число.', '1'))

if (numUser === randomNumber)
document.write(`Ура! Ви вгадали число :)`)
else 
document.write(`Жаль, але ви не вгадали число. Ваші числа - ${numberUser} і ${numUser}. Рандомне число - ${randomNumber}. Спроби закінчились.`)
}
