// 0. Значення
// Становище - randomPosition
// Виграш користувача - userWin
// Результат гри - resultGame
// Результат позиції - result

//1. Необхідні дані
let apple = `<img src="img/01.png" alt="">`
let avocado = `<img src="img/02.png" alt="">`
let banana = `<img src="img/03.png" alt="">`
let strawberry = `<img src="img/04.png" alt="">`
let result = ''
let resultGame = '';


// let images = " "

//2. Обчислення результату
for (let i = 0; i < 3; i++) {
    let randomPosition = Math.floor(1 + Math.random() * 4)
    switch (randomPosition) {
        case 1:
            result += apple, resultGame += "1"
            break;
        case 2:
            result += avocado, resultGame += "2"
            break;
        case 3:
            result += banana, resultGame += "3"
            break;
        case 4:
            result += strawberry, resultGame += "4"
            break;
    }
}
    switch (resultGame) {
        case "111":
            userWin = `${100}грн`;
            break;
        case "222":
            userWin = `${200}грн`;
            break;
        case "333":
            userWin = `${500}грн`;
            break;
        case "444":
            userWin = `${1000}грн`;
            break;
        default:
            userWin = `Вибачте, але ви нічого не виграли, можете ще раз зіграти`;
            break;
    }

//3. Виведення результату
document.write(`Ваш виграш ${userWin} ${result}`)