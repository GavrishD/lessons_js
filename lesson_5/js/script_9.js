// 0. Значення
// Число від користувача - userNum
// Комп'ютер вгадав число - numberGuess
// Число від комп'ютера - numberComputer

//1. Введення необхідних даних
let userNum = parseInt(prompt("Введіть число та комп'ютер спробує його вгадати"))
let numberGuess = false
let numberComputer

//2. Обчислення і виведення результату
do {
    let randomNumber
    if (userNum < 0) 
        randomNumber = Math.ceil(Math.random() * (userNum - 1));
    else 
        randomNumber = Math.floor(Math.random() * (userNum + 1));
    const numberComputer = confirm(`Це ваше число ${randomNumber}?`);

    if (numberComputer && randomNumber === userNum) {
        document.write(`Комп'ютер вгадав число`)
        numberGuess = true;
        numberComputer = randomNumber
    } 
    
} while (!numberGuess)
