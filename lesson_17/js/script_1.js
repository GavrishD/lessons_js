class OperationAll {
    static numberPositiveOnes = 0
    static numberNegatives = 0
    static numberOccurrencesSome = 0

    constructor(array) {
        this.array = [...array]
    }

    static findNumberPositiveOnes(array) {
        array.filter(item => item > 0 ? OperationAll.numberPositiveOnes++ : OperationAll.numberPositiveOnes)
        return OperationAll.numberPositiveOnes
    }
    static findNumberNegatives(array) {
        array.filter(item => item < 0 ? OperationAll.numberNegatives++ : OperationAll.numberNegatives)
        return OperationAll.numberNegatives
    }
    static numOccurrencesSome(array, number) {
        array.filter(item => item === number ? OperationAll.numberOccurrencesSome++ : OperationAll.numberOccurrencesSome)
        return OperationAll.numberOccurrencesSome
    }
}

let k = new OperationAll([-4, -4, -3, -2, -1, 0, 1, 2, 3, 4, 3, 4])

document.write(`Кількість додатних: ${OperationAll.findNumberPositiveOnes(k.array)}<br>Кількість відʼємних: ${OperationAll.findNumberNegatives(k.array)}<br>Кількість входжень деякого числа: ${OperationAll.numOccurrencesSome(k.array, 4)}`)