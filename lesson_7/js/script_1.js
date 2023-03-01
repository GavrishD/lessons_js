function getMonth(month) {
  switch (month) {
    case '12': return 'Це грудень'
    case '1': return 'Це січень'
    case '2': return 'Це лютий'
    case '3': return 'Це березень'
    case '4': return 'Це квітень'
    case '5': return 'Це травень'
    case '6': return 'Це червень'
    case '7': return 'Це липень'
    case '8': return 'Це серпень'
    case '9': return 'Це вересень'
    case '10': return 'Це жовтень'
    case '11': return 'Це листопад'
    default: return 'Error';
  }
}

const month = prompt("Введіть номер місяця")
const msg = getMonth(month)
document.write(msg)