let userElements = parseInt(prompt("Введить кількість елементів", "4"))

function getUserElements(userElements){
    let usElements = []
    for (let i = 0; i < userElements; i++) {
        const userElem = 10 + Math.floor(Math.random() * (40 - 10 + 1))
        usElements.push(userElem)
    }
    return usElements
}
let elementUser = getUserElements(userElements)

document.write(`Масив -> ${elementUser}<br>`)

elementUser.forEach((element, index, baseArrRef) => {
    if (element > baseArrRef[0])
    
    document.write(`Елемент ${index + 1} помножений на 2 -> ${element * 2}<br>`)
})