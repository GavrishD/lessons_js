let body = document.querySelector('body')
thisTable(3, 4, body, 10, 99)

function getRandomNum(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function thisTable(row, column, parent, min, max) {
    let table = document.createElement('table')
    table.style.cssText = 'border: 1px solid #414042;'

    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr')
        for (let k = 0; k < column; k++) {
            let td = document.createElement("td")
            td.style.border = '0.5px solid #414042'
            td.innerHTML = getRandomNum(min, max)
            tr.append(td)
        }
        table.append(tr)
    }
    parent.append(table)
}