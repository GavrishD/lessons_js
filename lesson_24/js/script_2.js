const string = '0504546626'
const reg = /\b(\d)(\d{2})(\d{2})(\d{3})(\d{2})\b/
let result = string.replace(reg, '+38$1-$2-$3-$4-$5')
console.log(result)