const arrString = ['45784', '456789', '1871', '786', '43453','76897']
const reg = /\b(\d)(\d*?)\1\b/g
let result = arrString.join(', ').match(reg).length
console.log(result)