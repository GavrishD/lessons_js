const string = '098765432109876'
const reg = /(\d{3}\B)/g
let result = string.replace(reg, '$& ')
console.log(result)