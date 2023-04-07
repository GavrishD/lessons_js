class TMoney {
    #priceDollar
    #sumDollar
    constructor(priceDollar, sumActual) {
        this.PriceDollar = priceDollar
        this.SumDollar = sumActual
    }

    get PriceDollar() {
        return this.#priceDollar
    }
    get SumDollar() {
        return this.#sumDollar
    }

    set PriceDollar(newVal) {
        this.#priceDollar = newVal
    }
    set SumDollar(newVal) {
        this.#sumDollar = this.dollarConvert(newVal)
    }

    dollarConvert(val) {
        return val / this.PriceDollar
    }
    hrivnaConvert(val) {
        return val * this.PriceDollar
    }
    hrivnaBalance() {
        return this.hrivnaConvert(this.SumDollar)
    }
    moneyAdd(val) {
        this.SumDollar = this.hrivnaConvert(this.SumDollar) + val
    }
    moneyTake(val) {
        if (val > this.hrivnaConvert(this.SumDollar)) {
            throw new Error(`Недостатньо грошей, поточний баланс: ${this.hrivnaConvert(this.SumDollar)}`
            )
        }
        this.SumDollar = this.hrivnaConvert(this.SumDollar) - val
    }

    hryvniasWillIncrease100 (nextSum = 100) {
        return (this.hrivnaBalance() + nextSum) / this.SumDollar
    }

    toString() {
        return `Баланс в доларах: ${this.SumDollar}<br>Баланс в гривнях: ${this.hrivnaBalance()}`
    }
}

const currency = new TMoney(37, 3700)
console.log(currency)
document.write(currency)