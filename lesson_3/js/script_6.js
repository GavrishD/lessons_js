// 0. Значення
// День тижня (від користувачем) - dayOfTheWeek
// Понеділок - monday
// Вівторок - tuesday
// Середа - wednesday
// Четвер - thursday
// П'ятниця - friday
// Субота - saturday
// Неділя - sunday

//1. Введення необхідних даних
let dayOfTheWeek = parseInt(prompt('Введіть номер дня тижня', '1'))

//2. Дані за замовчуванням
let monday = 1
let tuesday = 2
let wednesday = 3
let thursday = 4
let friday = 5
let saturday = 6
let sunday = 7

//3. Виведення результату
if (dayOfTheWeek == monday)
document.write(`Номер дня тижня ${dayOfTheWeek} - це понеділок`)
else if (dayOfTheWeek == tuesday)
document.write(`Номер дня тижня ${dayOfTheWeek} - це вівторок`)
else if (dayOfTheWeek == wednesday)
document.write(`Номер дня тижня ${dayOfTheWeek} - це середа`)
else if (dayOfTheWeek == thursday)
document.write(`Номер дня тижня ${dayOfTheWeek} - це четвер`)
else if (dayOfTheWeek == friday)
document.write(`Номер дня тижня ${dayOfTheWeek} - це п'ятниця`)
else if (dayOfTheWeek == saturday)
document.write(`Номер дня тижня ${dayOfTheWeek} - це субота`)
else if (dayOfTheWeek == sunday)
document.write(`Номер дня тижня ${dayOfTheWeek} - це неділя`)