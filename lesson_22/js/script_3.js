// клас який перевіряє чи введено число
class IncorrectData extends Error {
    constructor(){
        super()
        this.message = "Будь ласка, введіть число"
        this.name = 'IncorrectData'
    }
}

// клас який перевіряє чи введено число від 1 до 12
class IncorrectNumMonth extends Error {
    constructor() {
        super()
        this.message = 'Будь ласка, введіть номер місяця від 1 до 12'
        this.name = 'IncorrectNumMonth'
    }
}

// клас який перевіряє чи є канікули чи ні
class IncorrectStudyMonth extends Error {
    constructor(){
        super()
        this.message = 'Введіть номер навчального місяця'
        this.name = 'IncorrectStudyMonth'
    }
}

// клас який перевіряє чи введено число від 1 до 100
class IncorrectWriteNum extends Error {
    constructor(){
        super()
        this.message = 'Будь ласка, введіть оцінку учня від 1 до 100'
        this.name = 'IncorrectWriteNum'
    }
}

function confirmMonth(){
    try{
        let mhth = document.getElementById('month').value
        if (isNaN(mhth)) throw new IncorrectData();
        if (mhth <= 8 && mhth >= 6) throw new IncorrectStudyMonth();
        if (mhth < 1 || mhth > 12) throw new IncorrectNumMonth();
    }
    catch(error) {
        if(error instanceof IncorrectData) {
            console.log(error.message + "Вносите лише числа")
            document.getElementById('month').value = 0
        } else if(error instanceof IncorrectNumMonth) {
            console.log(error.message + "Введіть номер місяця від 1 до 12")
            document.getElementById('month').value = 1
        } else if(error instanceof IncorrectStudyMonth) {
            console.log(error.message + 'Введіть номер навчального місяця')
            document.getElementById('month').value = 1
        } else console.log(error.message)
        return false
    }
    return true
}

function confirmGrade(){
    try{
        let grade = document.getElementById('grade').value
        if(isNaN(grade)) throw new IncorrectData()
        if(grade < 0 || grade > 100) throw new IncorrectWriteNum()
    }
    catch(error){
        if(error instanceof IncorrectData){
            console.log(error.message + 'Вносите лише числа')
            document.getElementById('grade').value = 0
        } else if(error instanceof IncorrectWriteNum){
            console.log(error.message + "Введіть оцінку учня від 1 до 100")
            document.getElementById('grade').value = 1
        } else console.log(error.message)
        return false
    }
    return true
}

function checkGrade(){
    if(document.getElementById('month').value === '12' || document.getElementById('grade').value < 30) alert("Змінити оцінку неможливо")
    else alert("Оцінку можна виправити")
}

window.onload = function(){
    document.getElementById('month').addEventListener('change', confirmMonth)
    document.getElementById("grade").addEventListener("change", confirmGrade)
    document.getElementById("submit").addEventListener("click", checkGrade)
}
