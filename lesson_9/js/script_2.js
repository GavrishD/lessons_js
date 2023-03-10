let userElements = parseInt(prompt('Введіть кількість елементів', '4'))
let arrayUserElements = new Array(userElements).fill(1)
let newArrayUserElements = arrayUserElements.fill(7, Math.round(arrayUserElements.length / 2))

document.write(`Масив -> ${newArrayUserElements}`)