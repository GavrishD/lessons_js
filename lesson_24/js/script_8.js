const arrStudent = [
    {
        name: 'Mirko Alina Petrova',
        class: 4,
        faculty: 'Information Technology',
    },
    {
        name: 'Boyko Janna Vasileva',
        class: 2,
        faculty: 'Linguistics',
    },
    {
        name: 'Kirilenko Maxim Igorevich',
        class: 3,
        faculty: 'Information Technology',
    },
    {
        name: 'Miroshnichenko Alisa Vitalevna',
        class: 4,
        faculty: 'Culture and art',
    },
    {
        name: 'Rybko Alexey Nikolaevich',
        class: 3,
        faculty: 'International law',
    },
]

function showNumberFaculty(arr) {
    let set = new Set()
    arr.forEach((element) => {
        set.add(element.faculty)
    })
    return set.size
}

function showClassStudent(arr) {
    let map = new Map()
    for (const student of arr) {
        const classStudent = map.get(student.class) || 0
        map.set(student.class, classStudent + 1)
    }
    map.forEach((value, key) => {
        console.log(`${value} студенти - ${key} класа`)
    })
}

console.log(showNumberFaculty(arrStudent))
showClassStudent(arrStudent)