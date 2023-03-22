// Масив імен---------------------------------------------------------
let names = ["Victor", "Maxim", "Kora", "Olga", "Alex", "Helen"];

// Сортування масиву--------------------------------------------------
function getSortName(array) {
    for (let i = 1; i < array.length; i++) {
        const element = array[i]
        j = i - 1
        while (j >= 0 && array[j].length > element.length) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = element
    }
    return array
}
const sortName = getSortName(names)


// Бінарний пошук------------------------------------------------------
function getLengthFiveBinarySearch(array, lengthName) {
    let first = 0
    let last = array.length - 1
    while (first <= last) {
        const average = Math.floor((first + last) / 2)
        if (array[average].length === lengthName)
        return average
        if (lengthName > array[average].length) first = average + 1
        else last = average - 1
    }
    return -1
}
const lengthFiveBinarySearch = getLengthFiveBinarySearch(sortName, 5)


// Результат-----------------------------------------------------------------
document.write(`Відсортованний масив: ${sortName.join(", ")}<br>`)

if(lengthFiveBinarySearch !== -1) document.write(`<br>Імʼя довжиною 5 символів існує: ${lengthFiveBinarySearch}`);
else document.write(`<br>Імʼя довжиною 5 символів не існує`)
