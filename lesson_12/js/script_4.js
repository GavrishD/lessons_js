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
let arrRandom = getArrRandom(5, 10, 100)


// Сортування - бульбашка----------------------------------------------------
function getSortingBubble(arrRandom) {
    let changeArr = []
    let change
    let copyArr = [...arrRandom]
    do {
        change = false
        for (let i = 1; i < arrRandom.length; i++) {
            if (copyArr[i - 1] > copyArr[i]) {
                let k = copyArr[i - 1]
                copyArr[i - 1] = copyArr[i]
                copyArr[i] = k
                change = true
                changeArr.push([...copyArr])
            }
        }
    } while (change)
    return [changeArr, arrRandom]
}
const sortingBubble = getSortingBubble(arrRandom)

document.write(`<br>Сортування бульбашкою:<br>Початковий масив: ${sortingBubble[1].join(", ")}`)

for (let i = 0; i < sortingBubble[0].length; i++) {
    const changeArray = sortingBubble[0][i]
    document.write(`<br>Зміна ${i + 1}: ${changeArray.join(", ")}`)
}


// Сортування змішуванням----------------------------------------------------
function getSortingMixing(arrRandom) {
    let changeArr = []
    let indexOne = 0
    let indexTwo = arrRandom.length - 1
    let copyArr = [...arrRandom];

    while (indexOne < indexTwo) {
        for (let i = indexOne; i < indexTwo; i++) {
            if (copyArr[i] > copyArr[i + 1]) {
                let k = copyArr[i + 1]
                copyArr[i + 1] = copyArr[i]
                copyArr[i] = k
                changeArr.push([...copyArr])
            }
        }
        indexTwo--

        for (let i = indexTwo; i > indexOne; i--) {
            if (copyArr[i - 1] > copyArr[i]) {
                let l = copyArr[i - 1]
                copyArr[i - 1] = copyArr[i]
                copyArr[i] = l
                changeArr.push([...copyArr])
            }
        }
        indexOne++
    }
    return [changeArr, arrRandom]
}
const sortingMixing = getSortingMixing(arrRandom)

document.write(`<br><br>Сортування змішуванням:<br>Початковий масив: ${sortingMixing[1].join(", ")}`)

for (let i = 0; i < sortingMixing[0].length; i++) {
    const changeArray = sortingMixing[0][i]
    document.write(`<br>Зміна ${i + 1}: ${changeArray.join(", ")}`)
}


// Сортування включеннями----------------------------------------------------
function getSortInclusions(arrRandom) {
    let changeArr = []
    let copyArr = [...arrRandom]

    for (let j = 0; j < copyArr.length; j++) {
        const element = copyArr[j]
        let i = j - 1
        while (i >= 0 && copyArr[i] > element) {
            copyArr[i +1] = copyArr[i]
            i--
        }
        copyArr[i +1] = element
        changeArr.push([...copyArr])
    }
    return [changeArr, arrRandom]
}
const sortInclusions = getSortInclusions(arrRandom)

document.write(`<br><br>Сортування змішуванням:<br>Початковий масив: ${sortInclusions[1].join(", ")}`)

for (let i = 0; i < sortInclusions[0].length; i++) {
    const changeArray = sortInclusions[0][i]
    document.write(`<br>Зміна ${i + 1}: ${changeArray.join(", ")}`)
}