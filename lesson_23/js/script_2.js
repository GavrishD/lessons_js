let yearOfProduction = parseInt(prompt('Рік виробництва йогурта'))
let monthOfProduction = parseInt(prompt('Місяц виробництва йогурта'))
let dayOfProduction = parseInt(prompt('День виробництва йогурта'))
let numberDaysValidity = parseInt(prompt('введіть кількість днів придатності'))

function getDateDifference(yearOfProduction, monthOfProduction, dayOfProduction){
    let dateProduct = new Date(yearOfProduction, monthOfProduction - 1, dayOfProduction)
    let currentDate = new Date()
    let difference = currentDate - dateProduct

    return Math.floor(difference / (1000 * 60 * 60 * 24))
}

console.log(getDateDifference(yearOfProduction, monthOfProduction, dayOfProduction))
console.log(numberDaysValidity)

function expirationDateCheck(expiry){
    if(getDateDifference(yearOfProduction, monthOfProduction, dayOfProduction) > expiry) return `Термін придатності минув`;
    else return `Продукт придатний для вживання`;
}

const taskMain = document.getElementById("task-main");
taskMain.innerText = expirationDateCheck(numberDaysValidity);