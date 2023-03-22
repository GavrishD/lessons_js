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


// Сортування - бульбашка----------------------------------------------------
function getSortingBubble(arr) {
    let change
    let indicator = 0
    do {
        change = false
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                let k = arr[i - 1]
                arr[i - 1] = arr[i]
                arr[i] = k
                change = true
                indicator++
            }
        }
    } while (change)
    return indicator
}
let sortingBubble = getSortingBubble(arrRandom)


// Результат-----------------------------------------------------------------
document.write(`<br>Кількість обмінів під час сортування: ${sortingBubble}`)