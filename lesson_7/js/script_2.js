function getDay(day) {
    switch (day) {
        case '1': 
        case '2': 
        case '3': 
        case '4': 
        case '5': return 'Це робочий день'
        case '6':
        case '7': return 'Це вихідний день'
        default: return 'Error'
    }
}

const day = prompt('Введіть номер дня тижня')
const msg = getDay(day)
document.write(msg)