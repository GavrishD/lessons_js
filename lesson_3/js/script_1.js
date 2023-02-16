// 0. Значення
// Ім'я першої дитини - nameFirstChild
// Ім'я другої дитини - nameSecondChild
// Кількість цукерок у першої дитини - numOfCandiesOne
// Кількість цукерок у другої дитини - numOfCandiesTwo

//1. Введення необхідних даних
let nameFirstChild = prompt('Ведіть імʼя першої дитини', '')
let nameSecondChild = prompt('Ведіть імʼя другої дитини', '')
let numOfCandiesOne = parseInt(prompt('Кількість цукерок у першої дитини', '0'))
let numOfCandiesTwo = parseInt(prompt('Кількість цукерок у другої дитини', '0'))


//2. Обчислення и виведення результату
if (numOfCandiesOne > numOfCandiesTwo)
document.write(`Кількість цукерок більше у ${nameFirstChild} - ${numOfCandiesOne}шт`)
else if (numOfCandiesTwo > numOfCandiesOne)
document.write(`Кількість цукерок більше у ${nameSecondChild} - ${numOfCandiesTwo}шт`)
else (numOfCandiesOne === numOfCandiesTwo)
document.write(`Кількість цукерок у дітей, ${nameFirstChild} і ${nameSecondChild}, однакова`)

