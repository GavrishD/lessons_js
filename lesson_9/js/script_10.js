let userElements = parseInt(prompt("Введить кількість елементів", "4"))

function getUserPrices(userElements){
    let usPrices = []
    for (let i = 0; i < userElements; i++) {
        const userPrice = 50 + Math.floor(Math.random() * (200 - 50 + 1))
        usPrices.push(userPrice);
    }
    return usPrices;
}
let priceUser = getUserPrices(userElements)

let tax = priceUser.map((price) => Math.floor(price * 0.2 * 100) / 100)

document.write(`Масив з цін -> ${priceUser}<br>Масив сплаченого податку -> ${tax}`)