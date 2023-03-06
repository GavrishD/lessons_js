// Масив даних
function getScoreGrade(numGrade) {
    let allGrade = []
    for (let i = 0; i < numGrade; i++) {
        const gradeRandom = 2 + Math.floor(Math.random() * 4)
        allGrade.push(gradeRandom)
    }
    return allGrade
}
let allGradeStudent = 8
let scoreGrade = getScoreGrade(allGradeStudent)


// Вивод середньоі оцінки
function getAverageGrade(allGrade, numGrade) {
    let avarage
    let sum = 0
    for (let i = 0; i < allGrade.length; i++) {
        sum += allGrade[i]
        avarage = sum / numGrade
    }
    return avarage
}
let averageGrade = getAverageGrade(scoreGrade, allGradeStudent)


// Кількість оцінок що дорівнює 2,4,5
function getNumGrade(allGrade, grade) {
    let num = 0
    for (let i = 0; i < allGrade.length; i++) {
        if (allGrade[i] === grade) num++
    }
    return num
}
let numGrade2 = getNumGrade(scoreGrade, 2)
let numGrade4 = getNumGrade(scoreGrade, 4)
let numGrade5 = getNumGrade(scoreGrade, 5)


// Кількість оцінок - ниже середнього
function getNumAverageGrade(allGrade, scoreAverage) {
    let num = 0
    for (let i = 0; i < allGrade.length; i++) {
        if (allGrade[i] < Math.round(scoreAverage)) num++
    }
    return num
}
let numAverageGrade = getNumAverageGrade(scoreGrade, averageGrade)


document.write(`Оцінки - ${scoreGrade}<br>Середня оцінка - ${Math.round(averageGrade)}<br>Кількість 2 - ${numGrade2}<br>Кількість 4 - ${numGrade4}<br>Кількість 5 - ${numGrade5}<br>Кількість оцінок які нижче середнього - ${numAverageGrade}`)