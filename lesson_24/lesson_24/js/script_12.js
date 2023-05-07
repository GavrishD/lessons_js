const taskBlock = document.getElementById('task-block')

const label = document.createElement('label')
label.innerText = 'Внесіть ваші справи'

const input = document.createElement('input')
label.append(input)

const button = document.createElement('button')
button.innerText = 'Додати'
label.append(button)
let banner = true

button.addEventListener('click', function (e) {
    const inputValue = input.value
    localStorage.setItem(inputValue, inputValue)
    input.value = ''
    if (Object.values(localStorage).length > 0 && banner) {
        showTask()
        banner = false
    }
})
taskBlock.append(label);

function showTask() {
    const time = setTimeout(() => {
        const obVal = Object.values(localStorage)
        const indexRandom = Math.floor(Math.random() * obVal.length)
        const answerUser = confirm(`Ви встигли виконати ${obVal[indexRandom]}?`)
        if (answerUser) {
            localStorage.removeItem(obVal[indexRandom])
        }
        if (Object.values(localStorage).length === 0) {
            clearTimeout(time)
            banner = true
        }
        if (!banner) {
            showTask()
        }
    }, 5000)
}

localStorage.clear()