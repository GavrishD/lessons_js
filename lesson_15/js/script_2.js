// Створення функції-конструктора-------------------------------------------
class auto {
    constructor(brand, tankSizeGas, numLitersAvailable, numSeats, numPassengers) {
        this.brand = brand
        this.tankSizeGas = tankSizeGas
        this.numLitersAvailable = numLitersAvailable
        this.numSeats = numSeats
        this.numPassengers = numPassengers
    }

    // Заправка--------------------------------------------------------------
    refuelSpecifiedNumLiter(liters) {
        if (this.numLitersAvailable + liters > this.tankSizeGas) {
            const fuelRest = this.numLitersAvailable + liters - this.tankSizeGas
            throw new Error(`Бак буде переповнений. Не влізає: ${fuelRest}л.`)
        }
        console.log('Заправимо!')
    }

    // Кількість пасажирів---------------------------------------------------
    numberPassengers() {
        console.log(`Кількість пасажирів: ${this.numPassengers}`)
    }

    // Додавання пасажирів---------------------------------------------------
    addingPassen(passengers) {
        if (this.numPassengers + passengers > this.numSeats) {
            const passRest = this.numPassengers + passengers - this.numSeats
            throw new Error(`Нема вільних місць. Немає місць для: ${passRest} пасажирів.`)
        }
        this.numPassengers += passengers
        console.log('Куди ми поїдемо?')
    }

    // Висадка пасажирів-----------------------------------------------------
    disembarkationPassengers(decreasePas) {
        if (this.numPassengers - decreasePas < 0)
        throw new Error('Стільки немає')
        this.numPassengers -= decreasePas
        console.log('До зустрічі!')
    }
}

let automobile = new auto("Mitsubishi", 50, 25, 5, 3)

console.log('Заправка на вказану кількість л (15):  ')
automobile.refuelSpecifiedNumLiter(15)

console.log('Виведення кількості пасажирів:  ')
automobile.numberPassengers()

console.log('Додавання пасажирів (3):  ')
automobile.addingPassen(1)

console.log('Висадка пасажирів (2):  ')
automobile.disembarkationPassengers(2)