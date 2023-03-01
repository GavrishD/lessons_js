// Кількість парних - numOfEven
// Кількість додатних - numOfPositive
// Кількість більших за 100 - numOneHundred

function getNumResults(...numbers) {
    let numOfEven = 0
    let numOfPositive = 0
    let numOneHundred = 0

    for (const numUser of numbers) {
        if(numUser % 2 === 0){
            numOfEven++
        }
        if(numUser > 0){
            numOfPositive++
        }
        if(numUser > 100){
            numOneHundred++
        }
    }
    return {numOfEven,numOfPositive,numOneHundred}
}

const scoreNumber_1 = parseInt(prompt("Введіть перше число"))
const scoreNumber_2 = parseInt(prompt("Введіть друге число"))
const scoreNumber_3 = parseInt(prompt("Введіть третє число"))

const numResults = getNumResults(scoreNumber_1, scoreNumber_2, scoreNumber_3)

document.write(`Числа -> ${scoreNumber_1}, ${scoreNumber_2}, ${scoreNumber_3}.<br>Кількість парних -> ${numResults.numOfEven}.<br>Кількість додатних -> ${numResults.numOfPositive}.<br>Кількість більших за 100 -> ${numResults.numOneHundred}.`)
