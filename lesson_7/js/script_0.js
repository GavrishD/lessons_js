function getSeason(year) {
  switch(year) {
    case '12':  
    case '1':  
    case '2':  return 'Це зима'
    case '3':  
    case '4':  
    case '5':  return 'Це весна'
    case '6':  
    case '7':  
    case '8':  return 'Це літо'
    case '9':  
    case '10':  
    case '11':  return 'Це осінь'
    default:  return "Error";
  }
}

const year = prompt('Введіть номер місяця')
const msg = getSeason(year)
document.write(msg)