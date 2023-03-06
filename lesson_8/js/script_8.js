// Масив виграшу
let numberWin = 4
function getAllWins(numberWin) {
    let sum = []
    for (let i = 0; i < numberWin; i++) {
        const sumWin = -500 + Math.floor(Math.random() * (500 - -500 +1))
        sum.push(sumWin)
    }
    return sum
}
let allWins = getAllWins(numberWin)


// Виграшна сума гравця
function getSumUser(winUser) {
    let sumWin = 0
    let inform = 0
    for (let i = 0; i <= winUser.length; i++) {
        const choiceUser = parseInt(prompt(`Введіть номер вид 0 до ${allWins.length - 1}`))
        sumWin += winUser[choiceUser]
        const playInfo = confirm('Бажаете продовжувати?')
        if (playInfo === true) inform++
        else break
    }
    return sumWin
}
let sumUser = getSumUser(allWins)


document.write(`Виграшні суми - ${allWins}<br>Ваш виграш - ${sumUser}`)
