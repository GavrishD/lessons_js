class InformBanknotes {
    constructor(val, amount) {
        this.val = val
        this.amount = amount
    }
    getSumAmount() {
        return this.val * this.amount
    }
}

class TBankomat {
    constructor(currentArr) {
        this.informCurrent = currentArr
            .map((el) => {
            const {val, amount} = el
            return (el = new InformBanknotes(val, amount))
        })
            .sort((el1, el2) => el1.val - el2.val)
        this.sumTotal = this.getSumMax()
    }
    getSumMax() {
        return this.informCurrent.reduce((prevSum, element) => prevSum + element.getSumAmount(), 0)
    }
    getSumMin() {
        return this.informCurrent.find((element) => element.quantity > 0).value
    }
    moneyTake(val) {
        let moneyNow = 0
        let moneyNeed = val
        let j = 1
        let banknotUser = {}

        if (val > this.sumTotal) {
            throw new Error('Недостатньо грошей')
        } else {
            do {
                const banknote = Math.floor(moneyNeed / this.informCurrent[this.informCurrent.length - j].val)

                if (this.informCurrent[this.informCurrent.length - j].amount >= banknote) {
                    moneyNow = banknote * this.informCurrent[this.informCurrent.length - j].val
                    banknotUser[this.informCurrent[this.informCurrent.length - j].val] = banknote
                    this.informCurrent[this.informCurrent.length - j].amount -= banknote
                } else {
                    moneyNow = this.informCurrent[this.informCurrent.length - j].amount * this.informCurrent[this.informCurrent.length - j].val
                    banknotUser[this.informCurrent[this.informCurrent.length - j].val] = this.informCurrent[this.informCurrent.length - j].amount = 0
                }
                moneyNeed = moneyNeed - moneyNow
                j++
            } while (moneyNeed !== 0 && j <= this.informCurrent.length)
        }
        this.sumTotal = this.getSumMax()
        return banknotUser
    }
}

const array = [
    {
        val: 50,
        amount: 150,
    },
    {
        val: 80,
        amount: 200,
    },
    {
        val: 150,
        amount: 250,
    },
    {
        val: 190,
        amount: 220,
    },
    {
        val: 170,
        amount: 120,
    },
    {
        val: 160,
        amount: 185,
    },
]
const financeCompany = new TBankomat(array)
console.log(financeCompany)