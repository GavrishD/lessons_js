let studentsFacultyMathematics = ['Boyko', 'Bychok', 'Kirillenko', 'Petrenko', 'Nikilenko']
let studentsFacultyHistory = ['Nikolaenko', 'Fedorenko', 'Didenko', 'Kirillenko']

function studentNumberHistoryMathematics(studentsMathList, studentHistoryList) {
    let studentsRegistry = 0
    for (const student of studentHistoryList) {
        studentsMathList.some((element) => element === student) ? studentsRegistry++ : studentsRegistry
    }
    return studentsRegistry
}

function evenNumberStudentSubject() {
    const evenNumberStudent = new Set()
    for (const arr of arguments) {
        for (const name of arr) {
            evenNumberStudent.add(name)
        }
    }
    return evenNumberStudent.size
}

console.log(studentNumberHistoryMathematics(studentsFacultyMathematics, studentsFacultyHistory))
console.log(evenNumberStudentSubject(studentsFacultyMathematics, studentsFacultyHistory))