function getRandomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

const userMinNum = parseInt(prompt('введіть min число'))
const userMaxNum = parseInt(prompt('Введіть max число'))

function creatingTask() {
    const numOne = getRandomNum(userMinNum, userMaxNum)
    const numTwo = getRandomNum(userMinNum, userMaxNum)

    const timeStart = new Date()
    const answerUser = parseInt(prompt(`${numOne} + ${numTwo} = ?`))

    const timeEnd = new Date()
    const answerCorrect = numOne + numTwo
    const difference = timeEnd.getSeconds() - timeStart.getSeconds()

    alert(`${answerCorrect === answerUser ? 'Вірно' : 'Не вірно'}, на вирішення завдань витрачено ${difference}`)
}

creatingTask()