// Перший об'єкт---------------------------------------------------------
const obj1 = {
    id: 1,
    numList: [5, 8, 12, 24, 34, 35],
    getSum: function () {
        return this.numList.reduce((prevSum, number) => prevSum + number)
    },
    toString: function() {
        return `${this.id} об'єкт містить числа: ${this.numList}`
    },
}

// Другий об'єкт---------------------------------------------------------
const obj2 = {
    id: 2,
    numList: [14, 56, 34, 45, 67, 32],
    getFindProduct: function (valueMin, valueMax) {
        return this.numList.reduce(
            (prevProduct, number) => 
            number > valueMin && number < valueMax ? prevProduct * number : prevProduct,
            1
        )
    },
    toString: function () {
        return `${this.id} об'єкт містить числа: ${this.numList}`
    },
}

document.write(`${obj1} складається з: <br>`)
for (const property in obj1) {
    document.write(`${property}<br>`)
}

document.write(`<br>${obj2} складається з: <br>`)
for (const property in obj1) {
    document.write(`${property}<br>`)
}

const obj1ProductCall = obj2.getFindProduct.call(obj1, 15, 30)
const obj1ProductApply = obj2.getFindProduct.apply(obj1, [15, 30])
const obj2SumCall = obj1.getSum.call(obj2)
const obj2SumApply = obj1.getSum.apply(obj2)

document.write(`<br>Добуток числа (більше 15 і менше 30) з першого об'єкта за допомогою call -> ${obj1ProductCall}<br>Добуток числа (більше 15 і менше 30) з першого об'єкта за допомогою apply -> ${obj1ProductApply}<br><br>Сума чисел з другого об'єкта за допомогою call -> ${obj2SumCall}<br>Сума чисел з другого об'єкта за допомогою apply -> ${obj2SumApply}`)