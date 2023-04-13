class MultChecker {
    constructor(min = 1, max = 5) {
        this.min = min 
        this.max = max
    }

    getRandomNumber() {
        return this.min + Math.floor(Math.random() * (this.max - this.min + 1))
    }
    multi() {
        let firstNumber = this.getRandomNumber()
        let secondNumber = this.getRandomNumber()
        let result = firstNumber * secondNumber
        let reply = prompt(`${firstNumber} * ${secondNumber} = ?`)
        return [firstNumber, secondNumber, '*', reply, result]
    }
}

class AddChecked {
    constructor(min = 1, max = 5) {
        this.min = min
        this.max = max
    }

    getRandomNumber() {
        return this.min + Math.floor(Math.random() * (this.max - this.min + 1))
    }

    add() {
        let firstNumber = this.getRandomNumber()
        let secondNumber = this.getRandomNumber()
        let result = firstNumber + secondNumber
        let reply = prompt(`${firstNumber} + ${secondNumber} = ?`)
        return [firstNumber, secondNumber, '+', reply, result]
    }
}

class History {
    constructor() {
        this.testsList = []
    }
    additionTest(testData) {
        this.testsList.push(testData)
    }
    showHistory() {
        console.table(this.testsList)
    }
}

class TestData {
    constructor(array) {
        this.firstNumber = array[0]
        this.secondNumber = array[1]
        this.opration = array[2]
        this.reply = array[3]
        this.result = array[4]
    }
}

class TestManager {
    static testManag
    constructor(numberTest, interval) {
        if (TestManager.testManag) {
            return TestManager.testManag
        }
        this.numberTest = numberTest
        this.interval = interval
        this.history = new History()
        TestManager.testManag = this
    }

    getRandomNumber() {
        return (1 + Math.floor(Math.random() * (2 - 1 + 1)))
    }

    goTests() {
        let indicator = 0
        let interspace = setInterval(() => {
            let typeTest = this.getRandomNumber()
            let testData
            if (typeTest === 1)
            testData = new TestData(new MultChecker().multi())
            else testData = new TestData(new AddChecked().add())
            this.history.additionTest(testData)
            indicator++
            if (indicator === this.numberTest) {
                clearInterval(interspace)
                this.history.showHistory()
            }
        }, this.interval)
    }
}

const tests = new TestManager(5, 1000)
tests.goTests()