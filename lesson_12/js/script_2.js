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


// --------------------------------------------------------------------------
let changeArr = (array, i, k) => {
    const arr = array[i]
    array[i] = array[k]
    array[k] = arr
}

// Сортування змішуванням----------------------------------------------------
function getSortingMixing(array) {
    let indexOne = 0
    let indexTwo = array.length - 1
    let indicator = 0
    while (indexOne < indexTwo) {
        for (let i = indexOne; i < indexTwo; i++) {
            if (array[i] > array[i + 1]) {
                changeArr(array, i, i + 1)
                indicator++
            }
        }
        indexTwo--

        for (let i = indexTwo; i > indexOne; i--) {
            if (array[i] < array[i - 1]) {
                changeArr(array, i, i - 1)
                indicator++
            }
        }
        indexOne++
    }
    return indicator
}
let sortingMixing = getSortingMixing(arrRandom)


// Результат-----------------------------------------------------------------
document.write(`<br>Кількість обмінів під час сортування: ${sortingMixing}`)

