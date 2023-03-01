// Кількість рядків - tableRanks
// Кількість стовпців - tableColums

const tableRanks = parseFloat(prompt('Введіть кількість рядків', '0'))
const tableColums = parseInt(prompt('Введіть кількість стовпців', '0'))

if (tableRanks && tableColums)userTable(tableRanks, tableColums)

function userTable(ranks, columns, message = '٩(｡•́‿•̀｡)۶') {
    document.write('<table>')
    for (let rank=0; rank <ranks; rank++) {
        document.write('<tr>')
        for (let column = 0; column < columns; column++) {
            document.write(`<td>${message}</td>`)
        }
        document.write('</tr>')
    }
    document.write('</table>')
}


