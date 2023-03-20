// Двовимірний масив---------------------------------------------------
function getNumRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min +1))
}

function getArrayRandom(arrLength, min, max) {
    let array = new Array(arrLength)
        .fill(0)
        .map(() => getNumRandom(min, max))
    return array
}

function getTabArray(numRows, numColumn, min, max) {
    let arrTable = new Array(numRows)
        .fill(0)
        .map(() => getArrayRandom(numColumn, min, max))
    return arrTable 
}
let tabArray =  getTabArray(4, 4, 10, 100)


// 1) Сума елементів - [0,1][0,1]---------------------------------
function getSumFirstArea(table) {
    let sum = 0
    let rowN = 0
    let numRow = Math.round(table.length / 2)
    let numColumn = Math.round(table[rowN].length / 2)
    for (let row = 0; row < numRow; row++) {
        for (let column = 0; column < numColumn; column++) {
            sum += table [row][column]
        }
    }
    return sum
}
let sumFirstArea = getSumFirstArea(tabArray)


// 1) Сума елементів - [0,1][2,3]---------------------------------
function getSumSecondArea(table) {
    let sum = 0
    let rowN = 0
    let numRow = Math.round(table.length / 2)
    let numColumn = Math.round(table[rowN].length / 2)
    for (let row = 0; row < numRow; row++) {
        for (let column = numColumn; column < table[row].length; column++) {
            sum += table[row][column]
        }
    }
    return sum
}
let sumSecondArea = getSumSecondArea(tabArray)


// 1) Сума елементів - [2,3][0,1]---------------------------------
function getSumThirdArea(table) {
    let sum = 0 
    let rowN = 0
    let numRow = Math.round(table.length / 2)
    let numColumn = Math.round(table[rowN].length / 2)
    for (let row = numRow; row < table.length; row++) {
        for (let column = 0; column < numColumn; column++) {
            sum += table[row][column]
        }
    }
    return sum
}
let sumThirdArea = getSumThirdArea(tabArray)


// 1) Сума елементів - [2,3][2,3]---------------------------------
function getSumFourthArea(table) {
    let sum = 0
    let rowN = 0
    let numRow = Math.round(table.length / 2)
    let numColumn = Math.round(table[rowN].length / 2)
    for (let row = numRow; row < table.length; row++) {
        for (let column = numColumn; column < table[row].length; column++) {
            sum += table[row][column]
        }
    }
    return sum
}
let sumFourthArea = getSumFourthArea(tabArray)


// 2) Сума парних рядків
function getSumDoublRows(table) {
    let sum = 0
    for (let row = 0; row < table.length; row += 2) {
        for (let column = 0; column < table[row].length; column++) {
            sum += table[row][column]
        }
    }
    return sum
}
let sumDoublRows = getSumDoublRows(tabArray)


// 3) Сума непарних стовпців
function getSumUnpairColumns(table) {
    let sum = 0
    for (let row = 0; row < table.length; row++) {
        for (let column = 1; column < table[row].length; column += 2) {
            sum += table [row][column]
        }
    }
    return sum
}
let sumUnpairColumns = getSumUnpairColumns(tabArray)


// 4) Сума у парних рядках – непарні стовпці -> getSumFirstOption
function getSumFirstOption(table) {
    let sum = 0
    for (let row =0; row < table.length; row += 2) {
        for (let column = 1; column < table[row].length; column += 2) {
            sum += table[row][column]
        }
    }
    return sum
}
let sumFirstOption = getSumFirstOption(tabArray)


// 4) Сума у непарних рядках – парні стовпці -> getSumSecondOption
function getSumSecondOption(table) {
    let sum = 0
    for (let row = 1; row < table.length; row += 2) {
        for (let column = 0; column < table[row].length; column += 2) {
            sum += table[row][column]
        }
    }
    return sum
}
let sumSecondOption = getSumSecondOption(tabArray)


// 4) Функція для знаходження суми у парних рядках - непарні стовпці, у непарних - парні
function getSumGeneralOption(table) {
    let sumOne = 0
    let sumTwo = 0 
    for (let row = 0; row < table.length; row++) {
        for (let column = 0; column < table.length; column++) {
            if (row % 2 === 0 && column % 2 !== 0) {
                sumOne += table[row][column]
            } else if (row % 2 !== 0 && column % 2 === 0) {
                sumTwo += table[row][column]
            }
        }
    }
    return sumOne + sumTwo
}
let sumGeneralOption = getSumGeneralOption(tabArray)


// Результат-----------------------------------------------------------------
document.write(`Двовимірний масив: ${tabArray}<br><br>1) Сума елементів - [0,1][0,1]: ${sumFirstArea}<br>Сума елементів - [0,1][2,3]: ${sumSecondArea}<br>Сума елементів - [2,3][0,1]: ${sumThirdArea}<br>Сума елементів - [2,3][2,3]: ${sumFourthArea}<br><br>2) Сума парних рядків: ${sumDoublRows}<br><br>3) Сума непарних стовпців: ${sumUnpairColumns}<br><br>4) Сума у парних рядках – непарні стовпці: ${sumFirstOption}<br>Сума у непарних рядках – парні стовпці: ${sumSecondOption}<br>Сума у парних рядках - непарні стовпці, у непарних - парні: ${sumGeneralOption}`)