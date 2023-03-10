let userPrices = parseInt(prompt("Введить кількість елементів", "4"))

function getUsPrice(userPrice) {
    let usersPrice = []
    for (let i = 0; i < userPrice; i++) {
        const userElem = 600 + Math.floor(Math.random() * (1500 - 600 +1))
        usersPrice.push(userElem)
    }
    return usersPrice
}
let usPrice = getUsPrice(userPrices)

document.write(`Масив -> ${usPrice}<br>`)

usPrice.forEach((price, index, baseArrRef) => {
    if (price > 1000)
    baseArrRef[index] = Math.round(price * (1 - 30 / 100))
})

document.write(`Змінений масив -> ${usPrice}`)