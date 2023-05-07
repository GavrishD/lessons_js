const string = 'Я народився 2001, а в школі пішов 2007'
const reg = /\b(\d+?)\b/g
let result = string.replace(reg, '$&р.')
console.log(result)