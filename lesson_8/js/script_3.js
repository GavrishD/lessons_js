let namesStudent = ['Кора', 'Матвій', 'Альберт', 'Іван', 'Олена', 'Іван']


function getNumberNames(genNames, name) {
        let numberNamesIndivid = 0
        for (let i = 0; i < genNames.length; i++) {
                if (genNames[i] === name) numberNamesIndivid++
        }
        return numberNamesIndivid
}
let firstName = 'Іван'
let numberNamesIndivid = getNumberNames(namesStudent, firstName)


document.write(`Імена студентів - ${namesStudent}<br>Імʼя ${firstName} зустрічаеться ${numberNamesIndivid} рази`)
