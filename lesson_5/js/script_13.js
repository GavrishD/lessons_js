// 0. Значення
// Горизонталь - numberN
// Вертикаль - numberM
// Кількість снарядів - numberShells
// Перевірка перемоги - victoryCheck

//1. Введення необхідних даних
const numberN = parseInt(prompt("Введіть кількість клітин горизонтально - N"))
const numberM = parseInt(prompt("Введіть кількість клітин вертикально - M"))
let numberShells = parseInt(prompt("Введіть кількість снарядів"))

let victoryCheck = false

const randomN = Math.floor(1 + Math.random() * numberN)
const randomM = Math.floor(1 + Math.random() * numberM)

//2. Обчислення результату
while (numberShells > 0 && !victoryCheck) {
    const userShellsN = parseInt(prompt(`Для пострілу введіть клітку за N (від 1 до ${numberN})`))
    const userShellsM = parseInt(prompt(`Для пострілу введіть клітку за M (від 1 до ${numberM})`))

    if (isNaN(userShellsN) || isNaN(userShellsM)) {
        alert('Введіть правильні дані - число')
        continue
    }
    if (userShellsN === randomN && userShellsM === randomM) {
        alert('Ви знищили ворожий корабель')
        numberShells--
        victoryCheck = true
        break
    } else {
        numberShells--
        if (numberShells)
        alert(`Не вдарили, у вас залишилось ${numberShells} снаряди`)
        else
        alert(`Снаряди закінчилися, ви можете спробувати більше, просто оновіть сторінку :)`)
    }
}

//3. Виведення результату
document.write(`Кількість клітин горизонтально ${numberN}. <br> Кількість клітин вертикально ${randomM}. <br> Кількість снарядів ${numberShells}. <br> Корабель був: по N - ${randomN}, по M - ${randomM}`)

