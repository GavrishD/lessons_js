// 0. Значення
//Вік людини (від користувача)- personAge
//Вік дитини у дитячому садку - childAge
//Вік школяра - schoolchildAge
//Вік студента - studentAge
//Вік працівника - workerAge
//Вік пенсіонера - pensionerAge

//1. Введення необхідних даних
let personAge = parseInt(prompt('Введіть ваш вік, щоб ми визначили хто ви (дитина, школяр, студент, робітник або пенсіонер):', '0'))

//2. Дані за замовчуванням
let childAge = 6
let schoolchildAge = 16
let studentAge = 23
let workerAge = 59
let pensionerAge = 60

//3. Виведення результату
if (personAge <= childAge)
document.write(`Ви дитини у дитячому садку, ваш вік ${personAge}`)
else if (personAge <= schoolchildAge)
document.write(`Ви школяр, ваш вік ${personAge}`)
else if (personAge <= studentAge)
document.write(`Ви студент, ваш вік ${personAge}`)
else if (personAge <= workerAge)
document.write(`Ви працівник, ваш вік ${personAge}`)
else
document.write(`Ви пенсіонер, ваш вік ${personAge}`)
