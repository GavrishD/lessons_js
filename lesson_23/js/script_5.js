//----------------------------------------------------------------------------------------------------
const arrayOfStrings = ['apple', 'lemon', 'banan', '233445', 'get345678', 'cap 908765', 'cheese']

//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
let resultOne = arrayOfStrings.filter((str) => /\d/.test(str))
console.log(resultOne)

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
let resultTwo = arrayOfStrings.filter((str) => !/\d/.test(str))
console.log(resultTwo)

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
let resultThree = arrayOfStrings.filter((str) => /[uye]/.test(str))
console.log(resultThree)

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
let resultFour = arrayOfStrings.filter((str) => /^[^uye]*$/.test(str))
console.log(resultFour)

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
let resultFive = arrayOfStrings.filter((str) => /(1|3)/.test(str))
console.log(resultFive)


//----------------------------------------------------------------------------------------------------
const string = 'good, bee, sun; moo7n, satu5rn'

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
let resultSix = string.match(/[0-9]/g)
console.log(resultSix)

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
let resultSeven = string.match(/[^\w\s]/g)
console.log(resultSeven)

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
let resultEight = string.match(/\b\w+\b\W\s\b/g)
console.log(resultEight)


//----------------------------------------------------------------------------------------------------
const nextString = 'sun236, moon 23.04.1990, saturn 10.09.1890, mars'

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy 
// (dd- день, mm- місяць, yyyy- рік).
let resultNine = nextString.match(/\d{2}\.\d{2}\.\d{4}/g)
console.log(resultNine)

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
let resultTen = nextString.match(/\b\d{2}\b/g)
console.log(resultTen)

//----------------------------------------------------------------------------------------------------
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки
// (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
const stringThird = '4545-5656-7878-8787-gght, 1234-5678-9876-0909, hjki3490-789-849384, 3489-9089-7866-5467'
let resultEleven = stringThird.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
console.log(resultEleven)

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
const stringFourth = 'https://www.gov.pl/web/ua'
let resultTwelve = /gov/.test(stringFourth)
console.log(resultTwelve)

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
const stringFifth = 'mars sun3078 2024 saturn2245 2036'
let resultThirteen = stringFifth.match(/[2-9][0-9][0-9][0-9]/g).filter((num) => num > 2021)
console.log(resultThirteen)

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
const stringSixth = '+38-096-111-11-11'
let resultFourteen = /^\+38./.test(stringSixth)
console.log(resultFourteen)

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
const usName = 'Din Din'
let resultFifteenth = usName.replace(' ', '-')
console.log(resultFifteenth)

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». 
// Отримати рядкове представлення дати у форматі «день/місяць/рік»
const userDate = new Date(2023, 04, 07)
let resultSixteen = userDate.toLocaleDateString('en-GB')
console.log(resultSixteen)

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). 
// Визначити, чи  є це день вихідним
const userDay = prompt(`Введіть номер дня (0-6)`)
let resultSeventeenth 
if (/([0-6]|sun|mon|tue|wed|thu|fri|sat)/.test(userDay)) {
    resultSeventeenth = /(0|6|sun|sat)/.test(userDay) ? 'Вихідний день' : 'Будній день'
} else throw new Error('Невірне значення')
console.log(resultSeventeenth)