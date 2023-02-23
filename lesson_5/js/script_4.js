// 0. Значення
// 7 стовпців - COLUMN_SEV
// 3 ряди - ROWS_THR

//1. Введення необхідних даних
const ROWS_THR = 3;
const COLUMN_SEV = 7

//2. Обчислення результату
document.write(`<table>`)
for (let i = 1; i <= ROWS_THR; i++) {
        document.write(`<tr>`)

        for (let j = 1; j <= COLUMN_SEV; j++) {
        document.write(`<td>${j}</td>`);
}
        document.write(`</tr>`);
}

//3. Виведення результату
document.write(`</table>`)
