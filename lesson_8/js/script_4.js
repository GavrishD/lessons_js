let allNumberPlates = ['СВ6768ЕЕ', 'СВ6890ЕЕ', 'АВ345', 'АС5678ВВ', 'КА4567КА']


//Кількість номерів, які починаються на букву А
function getPlatesStrA(allPlates, firstLetter) {
    let num = 0
    for (let i = 0; i < allPlates.length; i++) {
        if (allPlates[i][0] === firstLetter) num++
    }
    return num
}
let letter = 'А'
let platesStrA = getPlatesStrA(allNumberPlates, letter)


// Кількіть номерів, де перша і остання літери співпадають
function getFirstLastLetter(allPlates) {
    let num = 0 
    for (let i = 0; i < allPlates.length; i++) {
        if (allPlates[i][0] === allPlates[i][allPlates[i].length - 1]) num++
    }
    return num
}
let firstLastLetter = getFirstLastLetter(allNumberPlates)


// Кількість номерів, які складаються з більше ніш 5 символів
function getMoreFiveSymbols(allPlates, numSymbols) {
    let num = 0
    for (let i = 0; i < allPlates.length; i++) {
        if (allPlates[i].length > numSymbols) num++
    }
    return num
}
let numSymbols = 5
let moreFiveSymbols = getMoreFiveSymbols(allNumberPlates, numSymbols)

document.write(`Номери авто - ${allNumberPlates}<br>Кількість номерів, які починіються на букву ${letter} - ${platesStrA}<br>Кількість номерів де перша і остання літери співпадаються - ${firstLastLetter}<br>Кількість номерів, які складаються з більше ніш 5 символів - ${moreFiveSymbols}`)