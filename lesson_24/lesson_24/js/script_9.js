let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

function temperaturesRegister(arr) {
    const map = new Map()
    for (const element of arr) {
        const tempRegister = map.get(element) || 0
        map.set(element, tempRegister + 1)
    }
    map.forEach((value, key) => {
        console.log(`Температура ${key} повторюється ${value} разів`)
    })
}

function showOtherTempNumber(arr) {
    let set = new Set()
    arr.forEach((element) => {
        set.add(Math.ceil(element))
    })
    return set.size
}

temperaturesRegister(temperatures)