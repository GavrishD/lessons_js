// 0. Значення
// Кількість місяців - NUM_MONTHS
// Температура місяця - temperatureMonth
// Загальна температура - temperatureTotal

//1. Введення необхідних даних
const NUM_MONTHS = 12
let temperatureTotal = 0

//2. Обчислення результату
for (let i = 1; i <= NUM_MONTHS;) {
    const temperatureMonth = parseFloat(prompt(`Введіть температуру ${i} місяця`))
    if (isNaN(temperatureMonth)) {
        alert('Введіть лише температуру')
    } else {
        temperatureTotal += temperatureMonth
        i++
    }
}
temperatureTotal /= NUM_MONTHS

//3. Виведення результату
document.write(`Середня температура на протязі року ${temperatureTotal.toFixed(1)}`)