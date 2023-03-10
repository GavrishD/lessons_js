let userElements = parseInt(prompt("Введить кількість елементів", "7"))
let arrayUserElemets = new Array(userElements).fill(1)
let newArrayUserElements = arrayUserElemets.fill(7, 5)

document.write(`Масив -> ${newArrayUserElements}`)