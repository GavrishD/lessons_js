const n = parseInt(prompt("Введіть значення n:", 1))

// Нерекурсивна функція------------------------------------------------------
function getNonrecurAlgorithms(n) {
    if (n === 0 || n === 1)
    return 1

    let x0 = 1, x1 = 1, xn = 1

    for (let i = 2; i <= n; i++) {
        xn = x0 + 2 * x1
        x1 = x0
        x0 = xn
    }
    return xn
}
const nonrecurAlgorithms = getNonrecurAlgorithms(n)


// Рекурсивна функція--------------------------------------------------------
function getRecurAlgorithms(n) {
    if (n === 0 || n === 1)
    return 1

    return getRecurAlgorithms(n - 1) + 2 * getRecurAlgorithms(n - 2)
}
const recurAlgorithms = getRecurAlgorithms(n)


// Результат-----------------------------------------------------------------
document.write(`Нерекурсивний алгоритм: ${nonrecurAlgorithms}<br>Рекурсивний алгоритм: ${recurAlgorithms}`)
