let dataNow = {
    day: 28,
    month: 3,
    year: 2023,
}

function getElYear({year, month}, n) {
    let monthTotal = month + n
    let monthRest = ((month - 1 + n) % 12) + 1
    let yearNum = (monthTotal - monthRest) / 12
    return [year + yearNum, monthRest]
}
let elYear = getElYear(dataNow, 6)

// Результат-----------------------------------------------------------------
document.write(`Наступить ${elYear[1]} місяц та ${elYear[0]} рік`)