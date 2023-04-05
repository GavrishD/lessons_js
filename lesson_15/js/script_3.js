const checkingNum = parseInt(prompt('Ваша цифра на якій тренуємось:'))

class MultChecker {
    constructor(checkingNum) {
        this.checkingNum = checkingNum
        this.numberCorrectAnswers = 0 
        this.numberWrongAnswers = 0
    }

    generationExamp() {
        let numRandom = 1 + Math.floor(Math.random() * 10)
        let numCorrect = this.checkingNum * numRandom
        return {numRandom, numCorrect}
    }

    answerCheckUser() {
        let userPlay = true
        do {
            let {numRandom, numCorrect} = this.generationExamp()
            let answUser = parseInt(prompt(`${this.checkingNum} * ${numRandom} =`))
            if (answUser === numCorrect) {
                this.numberCorrectAnswers++
                alert(`Правильно! Правильних відповідей: ${this.numberCorrectAnswers}. Не правильних: ${this.numberWrongAnswers}.`)
            } else {
                this.numberWrongAnswers++
                alert(`Не правильно! Правильних відповідей: ${this.numberCorrectAnswers}. Не правильних: ${this.numberWrongAnswers}.`)
            }
            userPlay = confirm('Продовжимо?')
        } while (userPlay)
    }

    result() {
        document.write(`Ваша цифра на якій тренуємось: ${this.checkingNum}.<br>Правильних відповідей: ${this.numberCorrectAnswers}.<br>Не правильних: ${this.numberWrongAnswers}.`)
    }
}

const multChecker = new MultChecker(checkingNum)
multChecker.answerCheckUser()
multChecker.result()
