// Двовимірний масив---------------------------------------------------
function getNumRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function getArrayRandom(arrLength, min, max) {
    let array = new Array(arrLength)
        .fill(0)
        .map(() => getNumRandom(min, max))
    return array
}

function getTabArray(numStore, profitWeekly, min, max) {
    let arrTable = new Array(numStore)
        .fill(0)
        .map(() => getArrayRandom(profitWeekly, min, max))
    return arrTable
}
let tabArray = getTabArray(2, 7, 10, 500)


// 1) Загальний прибуток кожного масиву за тиждень------------------------------
function getProfitEachStoreWeek(table, numStore) {
    let sum = 0
    let row = numStore - 1
    for (let column = 0; column < table[numStore - 1].length; column++) {
        sum += table[row][column]
    }
    return sum
}
let profitEachStoreWeekFirst = getProfitEachStoreWeek(tabArray, 1)
let profitEachStoreWeekSecond = getProfitEachStoreWeek(tabArray, 2)


// 2) Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)
function getTotalProfitAllStoresDay(table, dayWeek) {
    let sum = 0
    let column = dayWeek - 1
    for (let row = 0; row < table.length; row++) {
        sum += table[row][column]
    }
    return sum
}
let mondayTotalProfitAllStoresDay = getTotalProfitAllStoresDay(tabArray, 1)
let tuesdayTotalProfitAllStoresDay = getTotalProfitAllStoresDay(tabArray, 2)
let wednesdayTotalProfitAllStoresDay = getTotalProfitAllStoresDay(tabArray, 3)
let thursdayTotalProfitAllStoresDay = getTotalProfitAllStoresDay(tabArray, 4)
let fridayTotalProfitAllStoresDay = getTotalProfitAllStoresDay(tabArray, 5)
let saturdayTotalProfitAllStoresDay = getTotalProfitAllStoresDay(tabArray, 6)
let sundayTotalProfitAllStoresDay = getTotalProfitAllStoresDay(tabArray, 7)


// 3) Загальний прибуток за робочі дні------------------------------------------
function getTotalProfitAllDays(table, firstDayWeek, lastDayWeek) {
    let sum = 0
    for (let row = 0; row < table.length; row++) {
        for (let column = firstDayWeek - 1; column < lastDayWeek; column++) {
            sum += table[row][column]
        }
    }
    return sum
}
let totalProfitWorkingDays = getTotalProfitAllDays(tabArray, 1, 5)

// 4) Загальний прибуток за вихідні дні-----------------------------------------
let totalProfitWeekendDays = getTotalProfitAllDays(tabArray, 6, 7);


// 5) Максимальний прибуток за середу-------------------------------------------
function getMaxProfitWednesday(table, dayWeek) {
    let maxProfit = []
    for (let row = 0; row < table.length; row++) {
        for (let column = dayWeek - 1; column < dayWeek; column++) {
            maxProfit.push(table[row][column])
        }
    }
    return Math.max(...maxProfit)
}
let maxProfitWednesday = getMaxProfitWednesday(tabArray, 3)


// 6) Сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
function getGenericListValue(table, value) {
    let listVal = []
    for (let row of table) {
        for (let column of row) {
            if (column > value) listVal.push(column)
        }
    }
    return listVal
}
let genericListValue = getGenericListValue(tabArray, 200)


// 7) Відсортувати кожен тиждень за зростанням-------------------------------
function getSortEachWeekGrowth(table) {
    for (let row of table) {
        for (let column of row) {
            row.sort((el1, el2) => el1 - el2)
        }
    }
    return table
}
let sortEachWeekGrowth = getSortEachWeekGrowth(tabArray)


// 8) Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
function getSortWeekMaxElement(table) {
    for (let row of table) {
        for (let column of row) {
            row.sort((el1, el2) => el2 - el1)
        }
        table.sort((el1, el2) => el2[0] - el1[0])
    }
    return table
}
let sortWeekMaxElement = getSortWeekMaxElement(tabArray)


// 9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше)
function getSortWeeksSumElements(table) {
    table.sort(
        (el1, el2) => el2.reduce((sum, el) => sum + el) - el1.reduce((sum, el) => sum + el)
    )
    return table
}
let sortWeeksSumElements = getSortWeeksSumElements(tabArray)


// Результат-----------------------------------------------------------------
document.write(`Двовимірний масив: ${tabArray}<br><br>1) Прибуток першого магазину за тиждень: ${profitEachStoreWeekFirst}<br>   Прибуток другого магазину за тиждень: ${profitEachStoreWeekSecond}<br><br>2) Прибуток усіх магазинів за понеділок: ${mondayTotalProfitAllStoresDay}<br>Прибуток усіх магазинів за вівторок: ${tuesdayTotalProfitAllStoresDay}<br>Прибуток усіх магазинів за середу: ${wednesdayTotalProfitAllStoresDay}<br>Прибуток усіх магазинів за четвер: ${thursdayTotalProfitAllStoresDay}<br>Прибуток усіх магазинів за п'ятницю: ${fridayTotalProfitAllStoresDay}<br>Прибуток усіх магазинів за суботу: ${saturdayTotalProfitAllStoresDay}<br>Прибуток усіх магазинів за неділю: ${sundayTotalProfitAllStoresDay}<br><br>3) Загальний прибуток за робочі дні: ${totalProfitWorkingDays}<br><br>4) Загальний прибуток за вихідні дні: ${totalProfitWeekendDays}<br><br>5) Максимальний прибуток за середу: ${maxProfitWednesday}<br><br>6) Загальний список (одновимірний масив) зі значенням, які що більші за 200: ${genericListValue}<br><br>7) Відсортований кожен тиждень за зростанням: ${sortEachWeekGrowth}<br><br>8) Відсортовані тижні (рядки) за спаданням максимального елементу: ${sortWeekMaxElement}<br><br>9) Упорядкувані тижні (рядки) за спаданням суми елементів у рядку: ${sortWeeksSumElements}`)

