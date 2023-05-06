function calculateEndOfVacation(currentDate, holidayLength) {
    let expirationDate = currentDate
    expirationDate.setDate(expirationDate.getDate() + holidayLength)

    return expirationDate.toDateString()
}

const date = new Date()

const taskMain = document.getElementById("task-main");
taskMain.innerText = calculateEndOfVacation(date, 56);