function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function* getRandomGeneratorNumber(numbers)  {
    for (let i = 0; i < numbers; i++) {
        let randomNumber = getRandomNumber(1, 50)
        if (randomNumber % 2 === 0) yield randomNumber
        else yield randomNumber + 1
    }
}

let array = ''

for (let num of getRandomGeneratorNumber(8)) {
    array += `${num}, `
}

document.querySelector('.task-generator').innerText = array