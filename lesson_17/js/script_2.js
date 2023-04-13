class Car {
    static companyCar
    
    constructor(driverName, typeCar, numberCar) {
        if (Car.companyCar) {
            return Car.companyCar
        }
        this.driverName = driverName
        this.typeCar = typeCar
        this.numberCar = numberCar

        Car.companyCar = this
    }
    toString() {
        return (`Водій - ${this.driverName}<br>Марка авто - ${this.typeCar}<br>Номер авто - ${this.numberCar}`)
    }
}
const carCompany = new Car('Robert', 'BMW', 'CB0123EE')
document.write(carCompany.toString())