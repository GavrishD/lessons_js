// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
function getRandomElementsPrices(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function getAllRandomElementsPrices(time, min, max) {
    const all = new Array(time)
    .fill(0)
    .map(() => getRandomElementsPrices(min, max))
    return all
}
let allRandomElementsPrices = getAllRandomElementsPrices(12, 1, 10000)
document.write(`Масив цін на цінні папери за рік -> ${allRandomElementsPrices}<br>`)


// 1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн
let morePrice1000 = allRandomElementsPrices.filter((price) => price > 1000)
document.write(`<br>1) Масив цін на цінні папери що більші за 1000 грн -> ${morePrice1000}<br>`)


// 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн
let moreIndex1000 = []
allRandomElementsPrices.filter((price, index, baseArrRef) => {
    if (price > 1000) moreIndex1000.push(index);
})
document.write(`<br>2) Масив цін на цінні папери, у якому є номери тільки тих, що більші за 1000 грн -> ${moreIndex1000}<br>`)


// 3) Сформувати список з тих цін, які більші за попереднє значення
allRandomElementsPrices.forEach((price, index, baseArrRef) => {
    if (price < baseArrRef[index +1]) {
        allRandomElementsPrices[index + 1]
    }
    document.write(`<br>3) Список з тих цін, які більші за попереднє значення -> ${allRandomElementsPrices[index + 1]}<br>`)
})


// 4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
function getNewValue(value) {
    let priceMax = value.reduce((max, price) => price > max ? price : max)
    document.write(`<br>4) Максимальне значення -> ${priceMax}.`)

    let newValue = value.map((price) => Math.round((price * 100) / priceMax))
    return newValue
}
let newPriceValue = getNewValue(allRandomElementsPrices)
document.write(`<br>Масив, що міститиме значення цін у відсотках стосовно максимального ${newPriceValue}<br>`)


// 5) Підрахувати кількість змін цін
let changeElementPrice = allRandomElementsPrices.reduce(
    (sum, price, index, baseArrRef) => {
        return price !== baseArrRef[index +1] ? sum + 1 : sum
    },
    0
)
document.write(`<br>5) Кількість змін цін -> ${changeElementPrice}<br>`)


// 6) Визначити, чи є ціна, що менше 1000
const underPrice1000 = allRandomElementsPrices.some((price) => price < 1000)
document.write(`<br>6) Чи є ціна, що менше 1000 -> ${underPrice1000}<br>`)

// 7) Визначати, чи усі ціни більше за 1000
const moreAllPrice1000 = allRandomElementsPrices.every((price) => price > 1000)
document.write(`<br>7) Чи усі ціни більше за 1000 -> ${moreAllPrice1000}<br>`)


// 8) Підрахувати кількість цін, що більше за 1000
const morePricesNum1000 = allRandomElementsPrices.reduce((sum, price) => (price > 1000 ? sum + 1 : sum), 0)
document.write(`<br>8) Кількість цін, що більше за 1000 -> ${morePricesNum1000}<br>`)


// 9) Підрахувати суму цін, що більше за 1000
const sumMorePrice1000 = allRandomElementsPrices.reduce((sum, price) => (price > 1000 ? price + sum : sum), 0)
document.write(`<br>9) Сума цінб що більше за 1000 -> ${sumMorePrice1000}<br>`)


// 10) Знайти першу ціну, що більше за 1000
const firstPrice1000 = allRandomElementsPrices.find((price) => price > 1000)
document.write(`<br>10) Перша ціна, що більше за 1000 -> ${firstPrice1000}<br>`)


// 11) Знайти індекс першої ціни, що більше за 1000
let indexFirstMorePrice1000 = allRandomElementsPrices.findIndex((price, index, baseArrRef) => {
    if (price > 1000)
    return [index]
})
document.write(`<br>11) Індекс першої ціниб що більше за 1000 -> ${indexFirstMorePrice1000}<br>`)


// 12) Знайти останню ціну, що більше за 1000
const moreLastPrice1000 = allRandomElementsPrices.findLast((price) => price > 1000)
document.write(`<br>12) Остання ціна, що більше за 1000 -> ${moreLastPrice1000}<br>`)


// 13) Знайти індекс останньої ціни, що більше за 1000
const lastIndexPrice = allRandomElementsPrices.findLastIndex((price, index) => {
    if (price > 1000)
    return [index]
})
document.write(`<br>13) Індекс останньої ціни, що більше за 1000 -> ${lastIndexPrice}`)