// 0. Значення
// 3 стовпці - COLUMN_THR
// 3 ряди - ROWS_THR
// 3 таблиці - TABLES_THR

//1. Введення необхідних даних
const TABLES_THR = 3;
const ROWS_THR = 3
const COLUMN_THR = 3
let score = 1

//2. Обчислення результату
for (let i = 1; i <= TABLES_THR; i++) {
    document.write(`<table>`)

for (let j = 1; j <= ROWS_THR; j++) {
    document.write(`<tr>`)

for (let l = 1; l <= COLUMN_THR; l++) {
    document.write(`<td>${score}</td>`)
    score++;
}
    document.write(`</tr>`)
}

//3. Виведення результату
document.write(`</table>`)
}
