// 0. Значення
// Кількість днів у тижні - DAYS_IN_THE_WEEK
// Загальний прибуток - profitTotal
// Прибуток на тиждень - profitWeek
// Прибуток на день - profitDay
// Кількість тижнів від користувача - userWeeks
// Кількість днів в userWeeks від користувача - userDaysWeek


//1. Введення необхідних даних
const DAYS_IN_THE_WEEK = 7

let profitTotal = 0
let profitWeek = 0 

const userWeeks = parseInt(prompt('Введіть кількість тижнів:'))
const userDaysWeek = DAYS_IN_THE_WEEK * userWeeks

//2. Обчислення результату
for (let i = 1; i <= userDaysWeek;) {
    const profitDay = parseFloat(prompt(`Введіть свій прибуток ${i} дня - з ${userDaysWeek}.`))

    if (isNaN(profitDay)) {
        alert(`Введіть лише прибуток за ${i} день. `)
    } else {
        profitTotal += profitDay
        profitWeek += profitDay
        if (i % DAYS_IN_THE_WEEK === 0) {
            document.write(`Прибуток ${i / DAYS_IN_THE_WEEK} тиждня ${profitWeek} грн. <br>`)
            profitWeek = 0
        }
        i++
    }
}

//3. Виведення результату
document.write(`Загальний прибуток ${profitTotal} грн.`)


