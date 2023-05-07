const ageStudents = [7, 12, 6, 8, 9, 13, 14, 12, 15, 8, 12]
const map = new Map()

for (const element of ageStudents) {
    const elementCount = map.get(element) || 0
    map.set(element, elementCount + 1)
}

function getMaxAgeStudents(ob) {
    let maxAgeStudents = 0
    for (const entry of ob) {
        if (maxAgeStudents < entry[0]) maxAgeStudents = entry[0]
    }
    return maxAgeStudents
}

console.log(`Максимальний вік -> ${getMaxAgeStudents(map)}`)
console.log(map)