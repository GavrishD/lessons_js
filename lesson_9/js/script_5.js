let userElements = parseInt(prompt("Введить кількість елементів", "4"))

function getUserElements(userElements){
    let usElements = []
    for (let i = 0; i < userElements; i++) {
        const userElem = -10 + Math.floor(Math.random() * (20 - -10 + 1))
        usElements.push(userElem)
    }
    return usElements
}
let elementUser = getUserElements(userElements)

let resultMult = 1
for (let plusElement of elementUser) {
    if (plusElement >= 0)
    resultMult = resultMult * plusElement
}

document.write(`Масив -> ${elementUser}<br>Добуток додатних елементів -> ${resultMult}`)