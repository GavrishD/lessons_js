// Масив - зберігається поле з зайцями---------------------------------------
function getFieldSavedGame() {
    this.fieldGame = this.createFieldGame()
    this.rowField = parseInt(prompt('Вкажіть кількість рядів для ігрового поля:', 3))
    this.columnField = parseInt(prompt('Вкажіть кількість стовпців для ігрового поля:', 3))
    this.numRabbits = parseInt(prompt('Вкажіть кількість зайців для ігрового поля:', 3))
}

// Ігрове поле---------------------------------------------------------------
getFieldSavedGame.prototype.createFieldGame = function() {
    this.fieldGame = []
    for (let i = 0; i < this.rowField; i++) {
        let fillField = new Array(this.columnField).fill(0)
        this.fieldGame.push(fillField)
    }

// Зайці на полі-------------------------------------------------------------
    for (let i = 0; i < this.numRabbits; i++) {
        let randomRow, randomColumn
        do {
        randomRow = Math.floor(Math.random() * this.fieldGame.length)
        randomColumn = Math.floor(Math.random() * this.fieldGame.length)
        } while (this.fieldGame[randomRow][randomColumn] === 1)
        this.fieldGame[randomRow][randomColumn] = 1
    }
    return this.fieldGame
}


// Задається позиція прострілу-----------------------------------------------
getFieldSavedGame.prototype.getShot = function() {
    const numX = parseInt(prompt(`Вкажіть цифру від 1 до ${this.columnField} по осі X:`))
    const numY = parseInt(prompt(`Вкажіть цифру від 1 до ${this.rowField} по осі Y:`))
    if (this.fieldGame[numX - 1][numY - 1] === 1) 
    alert('Попадання!')
    else alert('Промах!')
}


// Ігрового поля-------------------------------------------------------------
getFieldSavedGame.prototype.fieldDisplay = function () {
    document.write(`<table>`)
    for (const rows of this.fieldGame) {
        document.write(`<tr>`)
        for (const columns of rows) {
            document.write(`<td>${columns}</td>`)
        }
        document.write(`</tr>`)
    }
    document.write(`</table>`)
}

const fieldSavedGame = new getFieldSavedGame()
fieldSavedGame.createFieldGame()
fieldSavedGame.getShot()
fieldSavedGame.fieldDisplay()