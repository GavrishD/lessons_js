// 0. Значення
// Число від користувача - userNum
// Спроби комп'ютера - numberOfAttempts
// Комп'ютер вгадав число - numberGuess
// Число від комп'ютера - numberComputer


//1. Введення необхідних даних
let userNum = parseInt(prompt("Введіть число та комп'ютер за 3 спроби спробує його вгадати"))
let numberOfAttempts = 3
let numberGuess = false

//2. Обчислення і виведення результату
do {
    let randomNumber
    if (userNum < 0)
    randomNumber = Math.ceil(Math.random() * (userNum -1))
    else
        randomNumber = Math.floor(Math.random() * (userNum + 1))
    const numberComputer = confirm(`Це ваше число ${randomNumber}?`)

    if (numberComputer && randomNumber === userNum) {
        document.write(` Число від користувача ${userNum}. Число від комп'ютера ${numberComputer}.<br>Комп'ютер вгадав число`)
        numberGuess = true
        numberComputer = randomNumber
    } else {
            numberOfAttempts--
            if (!numberOfAttempts) {
                document.write(`Комп'ютер не вгадав число.<br>Вибачте, але спроби скінчилися. Ви можете повторити ще.`
                )
            }
        }
    }
while (numberOfAttempts && !numberGuess)

