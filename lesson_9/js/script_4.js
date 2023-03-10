let userElements = parseInt(prompt("Введить кількість елементів", "4"))

function getUserElements(userElements) {
    let usElements = []
    for (let i = 0; i < userElements; i++) {
        const userElem = 60 + Math.floor(Math.random() * (150 - 60 + 1))
        usElements.push(userElem)
    }
    return usElements
}
let elementUser = getUserElements(userElements)

let elementsMore100 = []
for (const elemMore100 of elementUser) {
    if (elemMore100 > 100) elementsMore100.push(elemMore100)
}

document.write(`Масив -> ${elementUser}<br>Елементи, що більші з 100 -> ${elementsMore100}`)