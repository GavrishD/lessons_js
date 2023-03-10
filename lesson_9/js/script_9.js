let namesPeople = ["Кора", "Матвій", "Альберт", "Іван", "Олена"]

let newNamesPeople = namesPeople.map((name, index) => name[0])

document.write(`Імена студентів - ${namesPeople}<br>Масив з перших літер -> ${newNamesPeople}`)