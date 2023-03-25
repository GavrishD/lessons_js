// Функція генерації - min/max ----------------------------------------------
const numGenerateRandom = (numberMin, numberMax) => Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin)

// Функція - додавання двох випадкових чисел через проміжок часу-------------
function getAddingTwoRandomNum(lag, numRandom, numberMin, numberMax) {
    setTimeout(() => {
        const numberFirst = numRandom(numberMin, numberMax)
        const numberSecond = numRandom(numberMin, numberMax)
        const sum = numberFirst + numberSecond
        const numberUser = parseInt(prompt(`Скільки буде ${numberFirst} + ${numberSecond} =`))
        if ( sum === numberUser)
            alert(`Правильно, ${numberFirst} + ${numberSecond} = ${sum}`)
        else
            alert(`Не вірно, ${numberFirst} + ${numberSecond} = ${sum}`)
        getAddingTwoRandomNum(lag, numRandom, numberMin, numberMax)
    }, lag)
}
getAddingTwoRandomNum(10000, numGenerateRandom, 1, 20)

// Результат-----------------------------------------------------------------
// document.write(`Відсортованний масив: ${sortName.join(", ")}`)