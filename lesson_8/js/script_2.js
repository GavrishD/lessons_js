// Масив даних
function getNumberVisitors(numberVisitors){
    let genVisitors = []
    for (let i = 0; i < 7; i++) {
        const numberVisitorDay = parseInt(prompt(`Введіть кількість відвідувачів за ${i + 1} день`, '1'))
        genVisitors.push(numberVisitorDay)
    }
    return genVisitors
}
let numberVisitorsWeek = getNumberVisitors(7)


// Мінімальна кількість відвідувачів
function getMinNumberVisitors(genNumberVisitorsWeek){
    let minVisitors = genNumberVisitorsWeek[0]
    for (let i = 1; i < genNumberVisitorsWeek.length; i++) {
        if (genNumberVisitorsWeek[i] < minVisitors) minVisitors = genNumberVisitorsWeek[i]
    }
    return minVisitors
}
let minNumberVisitors = getMinNumberVisitors(numberVisitorsWeek)


// Максимальна кількість відвідувачів
function getMaxNumberVisitors(genNumberVisitorsWeek) {
    let maxVisitors = genNumberVisitorsWeek[0]
    for (let i = 1; i < genNumberVisitorsWeek.length; i++) {
        if (genNumberVisitorsWeek[i] > maxVisitors) maxVisitors = genNumberVisitorsWeek[i]
    }
    return maxVisitors
}
let maxNumberVisitors = getMaxNumberVisitors(numberVisitorsWeek);


// Дні
function getDays(genNumberVisitorsWeek, numberVisitors) {
    let scoreDay = []
    for (let k = 1; k <= 7; k++) {
        if (genNumberVisitorsWeek[k - 1] === numberVisitors) scoreDay += push[k]
    }
    return scoreDay
}
let dayMinVisitors = getDays(numberVisitorsWeek, minNumberVisitors);
let dayMaxVisitors = getDays(numberVisitorsWeek, maxNumberVisitors);


// Дні < 20
function getDaysVisitors20(genNumberVisitorsWeek, numberVisitors) {
    let scoreDays20 = []
    for (let k = 1; k <= 7; k++) {
        if (genNumberVisitorsWeek[k -1] < numberVisitors) scoreDays20 += push[k]
    }
    return scoreDays20
}
let dayVisitors20 = getDaysVisitors20(numberVisitorsWeek, 20)


// Кількість відвідувачів у робочі/не робочі дні
function getSumVisitorsWeekdays(genNumberVisitorsWeek, weekStart, weekEnd) {
    let sumVisitors = 0
    for (let i = weekStart; i <= weekEnd; i++) {
        sumVisitors += genNumberVisitorsWeek[i - 1]
    }
    return sumVisitors
}
let sumVisitorsWeekdays = getSumVisitorsWeekdays(numberVisitorsWeek, 1, 5)


// Загальна кількість днів на вихідних
function getWeekend(weekStart, weekEnd) {
    let sumDays = 0
    for (let i = weekStart;  i <= weekEnd; i++) {
        sumDays++
    }
    return sumDays
}
let sumDaysWeekend = getWeekend(6, 7)


document.write(`Кількість відвідувачів магазину протягом тижня - ${numberVisitorsWeek}<br>Мінімальна кількість відвідувачів магазину - ${minNumberVisitors}<br>Максимальна кількість відвідувачів магазину - ${maxNumberVisitors}<br>Дні коли кількість відвідувачів була мінімальною - ${dayMinVisitors}<br>Дні коли кількість відвідувачів була максимальною - ${dayMaxVisitors}<br>Дні коли кількість відвідувачів була меншою за 20 - ${dayVisitors20}<br>Загальну кількість клієнтів у робочі дні - ${sumVisitorsWeekdays} осіб<br>Загальна кількість днів на віходних була - ${sumDaysWeekend} дні`)
