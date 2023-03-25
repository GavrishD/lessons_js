const x = 10

// Функція - використання циклу for------------------------------------------
function getNonrecurAlgorithms(x) {
    if (x === 0) 
    return 1

    let j = 1
    for (let i = 1; i <= x; i++)
        j += + 2 * i
    return j
}
const nonrecurAlgorithms = getNonrecurAlgorithms(x)


// Рекурсивна функція--------------------------------------------------------
function getRecurAlgorithms(x, i = 1, j = 1) {
    if (x === 0)
    return 1

    if (i <= x) {
        j += +2 * i
        return getRecurAlgorithms(x, i + 1, j)
    }
    return j
}
const recurAlgorithms = getRecurAlgorithms(x)


// Результат-----------------------------------------------------------------
document.write(`Нерекурсивний алгоритм: ${nonrecurAlgorithms}<br>Рекурсивний алгоритм: ${recurAlgorithms}`)