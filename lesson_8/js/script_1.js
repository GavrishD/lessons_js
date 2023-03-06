// К предметів - numberSubjectsUser
// Оцінка користувача - scoreUser
// Середній бал - averageScore
// Категорія студента - categoryStudent

const numberSubjectsUser = parseInt(prompt('Введіть кількість предметів у студента', '3'))

function getScoreUser(numberSubjectsUser) {
    let scoreUser = []
    for (let i = 0; i < numberSubjectsUser; i++) {
      const numUser = parseInt(prompt(`Введіть ${i + 1} оцінку від 2 до 5`, '2'))
      scoreUser.push(numUser)
    }
    return scoreUser
}
const userList = getScoreUser(numberSubjectsUser)


function getAverageScore(userList) {
  let totalSumScore = 0
  for (let i = 0; i < userList.length; i++) {
    totalSumScore += userList[i]
  }
  return totalSumScore / numberSubjectsUser
}
const averageScore = getAverageScore(userList)


function getMinScoreStudent(userList) {
  let minScoreStudent = userList[1]
  for (let i = 0; i < userList.length; i++) {
    if (userList[i] < minScoreStudent) minScoreStudent = userList[i]
  }
  return minScoreStudent
}
const minStudent = getMinScoreStudent(userList)


function getCategoryStudent(minStudent) {
  switch (minStudent) {
    case 2:
      return "Студент двійочник";
    case 3:
      return "Студент трійочник";
    case 4:
      return "Студент хорошист";
    case 5:
      return "Студент відмінник";
  }
}
const category = getCategoryStudent(minStudent);


document.write(`Оцінки студента: ${userList}<br>Середня оцінка: ${Math.round(averageScore)}<br>Категорія студента: ${category}`)

