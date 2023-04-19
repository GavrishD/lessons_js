function creationTable() {
    const divMain = document.querySelector('.number-ratings')
    const priceNum = parseFloat(document.querySelector('.price-number').value)
    const table = document.createElement('table')
    table.classList.add('table')
    table.style.cssText = 'border: 1px solid #414042;'
    table.style.cssText = 'border-top: 1.5px solid #414042; border-bottom: 1.5px solid #414042; margin-top: 8px; margin-bottom: 8px;'
    for (let i = 0; i < priceNum; i++) {
        let tr = document.createElement('tr')
        table.append(tr)
        let input = document.createElement('input')
        input.setAttribute('placeholder', 0)
        tr.append(input)
    }
    divMain.append(table)
    const btn = document.createElement('button')
    btn.style.cssText = "padding: 5px 8px;";
    btn.innerHTML = "get average value";
    btn.classList.add("averageVal");
    btn.setAttribute("onclick", "getAverageVal()");
    divMain.append(btn);
}

function getAverageVal() {
    const divMain = document.querySelector(".number-ratings")
    const table = document.querySelectorAll('.table input')
    let result = 0
    for (const input of table) {
        result += parseFloat(input.value)
    }
    const p = document.createElement('p')
    p.innerHTML = `sum = ${(result / table.length).toFixed(1)}`
    divMain.append(p)
}

window.onload = () => {
    document.querySelector(".get-table").onclick = creationTable
}