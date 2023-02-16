// 0. Значення
// Ціна товару від покупця - productPrice
// Кількість грошей у покупця - amountOfMoney
// Фіксована ціна товару - fixedPriceOfGoods
// Залишок грошей у покупця - restOfMoney

//1. Введення необхідних даних
let productPrice = parseInt(prompt('Введіть ціну товару', '0'))
let amountOfMoney = parseInt(prompt('Введіть кількість ваших грошей', '0'))

//2. Обчислення залишку грошей покупця
let restOfMoney = productPrice - amountOfMoney

//3. Виведення результату
if (amountOfMoney >= 0 && productPrice >= 0) {
if (amountOfMoney < productPrice)
document.write(`Відмова у купівлі, недостатньо коштів. Ціна товару ${productPrice}грв, а у вас ${amountOfMoney}грв. До зустрічі наступного разу!`)
else {
document.write(`Дякуємо за покупку`)
if (amountOfMoney - productPrice >= 4)
document.write(`Ура! У вас залишилися гроші ${restOfMoney}грв. Ціна товару ${productPrice}грв. Пропонуємо вам придбати лотерею за 4 гривні :)`)
}
}
