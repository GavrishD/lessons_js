// 0. Значення
// Номер місяця (від користувачем) - monthNumber
// Грудень - winterDec
// Зима - winter
// Весна - spring
// Літо - summer
// Осінь - autumn


//1. Введення необхідних даних
let monthNumber = parseInt(prompt('Введіть номер місяця', '1'))

//2. Дані пори року
let winterDec = 12
let winter = 2
let spring = 5
let summer = 8
let autumn = 11

//3. Виведення результату
if (monthNumber == winterDec)
document.write(`Номер місяця ${monthNumber} - це зима`)
else if (monthNumber <= winter)
document.write(`Номер місяця ${monthNumber} - це зима`)
else if (monthNumber <= spring)
document.write(`Номер місяця ${monthNumber} - це весна`)
else if (monthNumber <= summer)
document.write(`Номер місяця ${monthNumber} - це літо`)
else if (monthNumber <= autumn)
document.write(`Номер місяця ${monthNumber} - це осінь`)