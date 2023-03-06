let cellSet = parseInt(prompt('Введіть кількість клітинок поля', '8'))
let shipSet = parseInt(prompt('Введіть кількість кораблів', '2'))

// Поле для гри 
function getFieldPlay(numCellSet, numShipSet) {
    let field = []
    for (let i = 0; i < numCellSet; i++) {
        field.push(0)
    }
    for (let i = 0; i < numShipSet; ){
    const numRandom = 1 + Math.floor(Math.random() * numCellSet)
    if (field[numRandom - 1] === 0) field[numRandom - 1] = 1;
    numShipSet--
    }
    return field
}
let fieldPlay = getFieldPlay(cellSet, shipSet)

// Цикл гри
for (let i = 0; i < shipSet; ) {
    let playerShot = parseInt(prompt(`Введіть клітинку для вистрелу від 1 до ${cellSet}`, '1'))
    if (fieldPlay[playerShot - 1] === 1) {
        shipSet--
        alert(`Ви вбили корабель, залишилось ${shipSet}`)
    } else 
        alert(`Ви не потрапили, залишилось ${shipSet}`);
}


document.write(`Масив з кораблями - ${fieldPlay}`);
