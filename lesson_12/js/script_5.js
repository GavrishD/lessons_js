// Масив імен---------------------------------------------------------
let names = ["Victor", "Maxim", "Kora", "Olga", "Alex", "Helen"]


// Сортування масиву--------------------------------------------------
function getSortName(array) {
    for (let i = 1; i < array.length; i++) {
        const element = array[i]
        j = i - 1
        while (j >= 0 && array[j] > element) {
            array[j +1] = array[j]
            j--
        }
        array[j + 1] = element
    }
    return array
}
const sortName = getSortName(names)


// Бінарний пошук------------------------------------------------------
function getBinarySearch(array, elemSearch) {
    let first = 0
    let last = array.length - 1
    while (first <= last) {
        const average = Math.floor((first + last) / 2)
        if (array[average] === elemSearch)
        return average
        if (array[average] < elemSearch) first = average + 1
        else last = average - 1
    }
    return -1
}
const findBinarySearch = getBinarySearch(sortName, "Olga")


// Результат-----------------------------------------------------------------
document.write(`Відсортованний масив: ${sortName.join(", ")}`)

if (findBinarySearch !== -1) document.write(`<br><br>Індекс: ${findBinarySearch}`)
else document.write(`Error :(`)