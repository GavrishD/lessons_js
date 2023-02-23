// 0. Значення
// Ціна товару - PRICE_PRODUCT
// Гроші покупця - userMoney

//1. Введення необхідних даних
const PRICE_PRODUCT = 500
let sumMoneyNow = 0 


//2. Обчислення і виведення результату
while (sumMoneyNow <= PRICE_PRODUCT) {
    let userMoney = parseInt(prompt(`Товар коштує ${PRICE_PRODUCT} грн. Введіть суму грошей для оплати товару`, ""))
        sumMoneyNow = sumMoneyNow + userMoney
        alert(`Ще потрібно ${(PRICE_PRODUCT - sumMoneyNow).toFixed(2)}`)

    if (sumMoneyNow > PRICE_PRODUCT)
        alert(`Ваша здача ${(sumMoneyNow - PRICE_PRODUCT).toFixed(2)}`)
}
alert(`Дякуємо за покупку!`)