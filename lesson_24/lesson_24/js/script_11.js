const docBody = document.body
const taskMain = document.getElementById('task-main')

const inputColor = document.createElement('input')
inputColor.setAttribute('type', 'color')

const labelCheckbox = document.createElement('label')
labelCheckbox.innerText = 'Ви хочете зберегти колір для всіх сеансів?'

const inputCheckbox = document.createElement('input')
inputCheckbox.setAttribute("type", "checkbox")
labelCheckbox.append(inputCheckbox)

const changeColorRegistry = document.createElement('div')

inputColor.addEventListener('input', function () {
    const colorUser = inputColor.value
    docBody.style.backgroundColor = `${colorUser}`
})

inputColor.addEventListener('change', function () {
    inputCheckbox.checked = false
    localStorage.removeItem('colorUser')
    localStorage.removeItem('userChoise')
    sessionStorage.setItem('userCounter', +sessionStorage.getitem('userCounter') + 1)
    changeColorRegistry.innerText = `Змінювали колір ${sessionStorage.getItem('userCounter')} разів протягом сесії браузера`
})

if (sessionStorage.getItem('userCounter')) {
    changeColorRegistry.innerText = `Змінювали колір ${sessionStorage.getItem('userCounter')} разів протягом сесії браузера`
}

inputCheckbox.addEventListener('click', function () {
    const colorSave = inputCheckbox.checked
    if (colorSave) {
        localStorage.setItem("userColor", inputColor.value)
        localStorage.setItem('userChoise', saveColor)
    } else {
        localStorage.removeItem('userColor')
        localStorage.removeItem('userChoise')
    }
})

const title = document.createElement('h2')
title.innerText = 'Оберіть колір фону'

taskMain.append(title)
taskMain.append(inputColor)
taskMain.append(labelCheckbox)
taskMain.append(changeColorRegistry)

window.onload = () => {
    if (localStorage.getItem('userChoise')) {
        inputCheckbox.checked = true
        docBody.style.backgroundColor = localStorage.getItem('colorUser')
    }
}