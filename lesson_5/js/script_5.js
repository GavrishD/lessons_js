// 0. Значення
// 3 стовпці - COLUMN_THR
// 3 ряди - ROWS_THR

//1. Введення необхідних даних
const ROWS_THR = 3
const COLUMN_THR = 3
let score = 1

//2. Обчислення результату
document.write(`<table>`)
for (let i = 1; i <= ROWS_THR; i++) {
    document.write(`<tr>`)

for (let j = 1; j <= COLUMN_THR; j++) {
    document.write(`<td>${score}</td>`)
    score++
}
    document.write(`</tr>`)
}

//3. Виведення результату
document.write(`</table>`)
