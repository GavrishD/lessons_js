// Сума - sumNumber
// Добуток - multiplicationNumber
// Середнє арифметичне - averageScore
// Мінімальне значення - minValue

function getSumNumber(score1, score2, score3, score4) {
        let sumNumber = score1 + score2 + score3 + score4
        return sumNumber
}

function getMultiplicationNumber(score1, score2, score3, score4) {
        let multiplicationNumber = score1 * score2 * score3 * score4
        return multiplicationNumber
}

function getAverageScore(score1, score2, score3, score4) {
        let averageScore = (score1 + score2 + score3 + score4) / 4
        return averageScore
}

function getMinValue(score1, score2, score3, score4) {
        let minValue = Math.min(score1, score2, score3, score4)
        return minValue
}

const scoreNumber_1 = parseInt(prompt('Введіть перше число'))
const scoreNumber_2 = parseInt(prompt('Введіть друге число'))
const scoreNumber_3 = parseInt(prompt('Введіть третє число'))
const scoreNumber_4 = parseInt(prompt('Введіть четверте число'))

const sumNumber = getSumNumber(scoreNumber_1, scoreNumber_2, scoreNumber_3, scoreNumber_4)
const multiplicationNumber = getMultiplicationNumber(scoreNumber_1, scoreNumber_2, scoreNumber_3, scoreNumber_4)
const averageScore = getAverageScore(scoreNumber_1, scoreNumber_2, scoreNumber_3, scoreNumber_4)
const minValue = getMinValue(scoreNumber_1, scoreNumber_2, scoreNumber_3, scoreNumber_4)

document.write(`Числа -> ${scoreNumber_1}, ${scoreNumber_2}, ${scoreNumber_3}, ${scoreNumber_4}.<br>Сума чисел = ${sumNumber}.<br>Добуток чисел = ${multiplicationNumber}.<br>Середнє арифметичне чисел = ${averageScore}.<br>Мінімальне значення серед чисел = ${minValue}`)