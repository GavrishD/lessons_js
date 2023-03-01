// Сантиметри у дюйми - cmToInches
// Кілограми у фунти - kgToPounds
// Кілометри у милі - kmInMiles

function getCmToInches(num1) {
    let cmToInches = (num1 * 0.393701).toFixed()
    return cmToInches
}

function getKgToPounds(num2) {
    let kgToPounds = (num2 * 2.20462).toFixed()
    return kgToPounds
}

function getKmInMiles(num3) {
    let kmInMiles = (num3 * 0.621371).toFixed()
    return kmInMiles
}

const num1 = parseInt(prompt('Введіть дані у сантиметрах'))
const num2 = parseInt(prompt('Введіть дані у кілограмах'))
const num3 = parseInt(prompt('Введіть дані у кілометрах'))

const cmToInches = getCmToInches(num1)
const kgToPounds = getKgToPounds(num2)
const kmInMiles = getKmInMiles(num3)


document.write(`1) ${num1} cm це ${cmToInches} дюймів<br>2) ${num2} kg це ${kgToPounds} фунтів<br>3) ${num3} km це ${kmInMiles} миль`)