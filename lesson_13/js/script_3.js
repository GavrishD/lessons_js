// Функція-ітератор, генерування числа від мінімального до максимального-----
const numberGeneration = (numberMin, numberMax) => {
    let num = numberMin - 1
    let max = numberMax - 1
    return () => num > max ? num = numberMin : ++num
}

// Ітератор місяця-----------------------------------------------------------
const numberIteratorMonth = numberGeneration(1, 12)

// Порожній масив------------------------------------------------------------
numMonth = []

// Функція, генерування кількісті чисел місяців + додає їх у передний масив--
function getNumMonthPush(numberMon, iterator, arr) {
    for (let i = 0; i < numberMon; i++)
    arr.push(iterator())
}
getNumMonthPush(36, numberIteratorMonth, numMonth)

// Результат-----------------------------------------------------------------
document.write(`Перебір номерів місяців: ${numMonth.join(', ')}`)