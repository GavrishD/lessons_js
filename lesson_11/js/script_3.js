const numShells = parseInt(prompt('Введіть кількість снарядів:', '2'))

// Генерування масиву заповненого 0----------------------------------------------
function getNullArray(row, column) {
    let fieldArray = []
    for (let i = 0; i < row; i++) {
        let columnArr = new Array(column).fill(0)
        fieldArray.push(columnArr)
    }
    return fieldArray
}

// Заповнення масиву кораблями----------------------------------------------------
function getFillShips(field, ships) {
    for (let i = 0; i < ships; i++) {
        let randomRow, randomColumn
        do {
          randomRow = Math.floor(Math.random() * field.length)
          randomColumn = Math.floor(Math.random() * field.length)
        } while (field[randomRow][randomColumn] === 1)
        field[randomRow][randomColumn] = 1
    }
    return field
}

// Гра----------------------------------------------------------------------------
function getGameProgress(fight, shells, ships) {
    let register = 0
    let player = ''

    do {
        const howRow = parseInt(prompt('Введіть значення по горизонталі від 1 до 6:', '1'))
        const howColumn = parseInt(prompt('Введіть значення по вертикалі від 1 до 6:', '1'))
        if (fight[howRow - 1][howColumn -1] === 1) {
            alert(`Попали!`)
            fight[howRow - 1][howColumn -1] = 0
            shells--
            ships--
            register++
        } else {
            alert(`Не попали!`)
            shells--
        }
    } while (shells)

    if (ships === 0) {
        player = `Вітаю, ви виграли!`
    } else {
        player = `На жаль, снаряди закінчилися.`;
    }
    return [register, player]
}

const fieldGameArray = getNullArray(6, 6, 5)
const fieldGameShips = getFillShips(fieldGameArray, 5)
const resultGame = getGameProgress(fieldGameShips, numShells, 5)


document.write(`Кількість потоплених кораблів: ${resultGame[0]}, ${resultGame[1]}`)
