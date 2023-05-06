const arr = []

function getRandomNum(min, max){
    return min + Math.floor(Math.random() * (max - min + 1))
}
for (let i = 0; i < 10000; i++){
    arr.push(getRandomNum(1, 800))
}

const copyArr = [...arr]

function bubbleSort(arr) {
    let counting = 0
    const timeStart = new Date()

    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temporally = arr[j]
                arr[j] = arr[i]
                arr[i] = temporally
            }
            counting++
        }
    }
    const timeEnd = new Date()

    console.log('bubbleSort')
    console.log(`Time => ${timeEnd - timeStart}ms`)
    console.log(`Iteration => ${counting}`)

    return arr
}

function insertSort(arr) {
    let currentVal, j
    let counting = 0
    const timeStart = new Date()

    for (let i = 1; i < arr.length; i++){
        currentVal = arr[j]
        j = i - 1
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j]
            j = j - 1
            counting++
        }
        arr[j + 1] = currentVal
    }
    const timeEnd = new Date()

    console.log("insertSort")
    console.log(`Time => ${timeEnd - timeStart}ms`)
    console.log(`Iteration => ${counting}`)

    return arr
}

bubbleSort(arr)
insertSort(copyArr)