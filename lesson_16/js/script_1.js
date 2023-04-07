class TDate {
    #days
    #months
    #years
    constructor(day, month, year) {
        this.Days = day
        this.Months = month
        this.Years = year
    }
    get Days() {
        return this.#days
    }
    get Months() {
        return this.#months
    }
    get Years() {
        return this.#years
    }

    set Days(newVal) {
        if (!newVal || newVal <= 0 || newVal > 30) {
            throw new Error('Недійсне значення. Значення днів має бути від 1 до 30.')
        }
        this.#days = newVal
    }
    set Months(newVal) {
        if (!newVal || newVal <= 0 || newVal > 12) {
            throw new Error('Недійсне значення. Значення місяців має бути від 1 до 12')
        }
        this.#months = newVal
    }
    set Years(newVal) {
        if (!newVal || newVal <= 0) {
            throw new Error('Недійсне значення. Значення року не може бути менше 1')
        }
        this.#years = newVal
    }

    daysIncrease(val) {
        const result = this.Days
        this.Days = ((this.Days - 1 + val) % 30) + 1;
        this.monthsIncrease(Math.floor((result - 1 + val) / 30))
    }
    monthsIncrease(val) {
        const result = this.Monhts
        this.Monhts = ((this.Monhts - 1 + val) % 12) + 1;
        this.yearsIncrease(Math.floor((result - 1 + val) / 12))
    }
    yearsIncrease(val) {
        this.Years = this.Years + val;
    }

    daysDecrease(val) {
        const daysTotal = (this.Years - 1) * 360 + (this.Months - 1) * 30 + this.Days - 1
        this.Days = 1
        this.Months = 1
        this.Years = 1;
        this.daysIncrease(daysTotal - val)
    }

    monthsDecrease(val) {
        const monthsTotal = (this.Years - 1) * 12 + this.Months - 1;
        this.Months = 1;
        this.Years = 1;
        this.monthsDecrease(monthsTotal - val)
    }

    yearsDecrease(val) {
        this.Years = this.Years - val;
    }

    toString() {
        return `${this.#days}.${this.#months}.${this.#years}`
    }
}

const period = new TDate(7, 4, 2023)
console.log(period)
document.write(period)