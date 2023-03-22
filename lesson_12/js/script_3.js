// Рандомне число------------------------------------------------------------
function getNumRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}


// Одновимірний масив--------------------------------------------------------
function getArrRandom(arrLength, min, max) {
    const array = []
    for (let i = 0; i < arrLength; i++) {
        const numRandom = getNumRandom(min, max)
        array.push(numRandom);
    }
    return array
}
let arrRandom = getArrRandom(10, 5, 50)


// Сортування включеннями----------------------------------------------------
function getSortInclusions(arrRandom) {
    let indicator = 0
    for (let i = 0; i < arrRandom.length; i++) {
        const element = arrRandom[i];
        let j = i - 1
        while (j >= 0 && arrRandom[j] > element) {
            arrRandom[j + 1] = arrRandom[j]
            j--
            indicator++
        }
        arrRandom[j + 1] = element
        indicator++
    }
    return [arrRandom, indicator]
}
const sortInclusions = getSortInclusions(arrRandom)


// Результат-----------------------------------------------------------------
document.write(`<br>Кількість обмінів під час сортування: ${sortInclusions[1]}`)