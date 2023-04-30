class MakeLists{
    constructor(){
    this.minNum = 1
    this.maxNum = 10
    this.minElementVal = 1
    this.maxElementVal = 100
    }

    getRandomNumber(min, max) {
        return min+Math.floor(Math.random() * (max - min + 1))
    }

    makeArr(minNum, maxNum, minElementVal, maxElementVal) {
        let array = []
        let arrayLength = this.getRandomNumber(minNum, maxNum)
        for(let i = 0; i < arrayLength; i++) {
            let element = this.getRandomNumber(minElementVal, maxElementVal);
            array.push(element)
        }
        return array
    }

    makeList(array) {
        const ol = document.createElement('ol')
        for(const el of array){
            const li = document.createElement('li')
            li.innerText = el
            ol.append(li)
        }
        return ol
    }

    checkingList() {
        if((this.list01.children).length % 2) this.list01.classList.add('odd')
        else this.list01.classList.add('couples')

        if((this.list02.children).length % 2) this.list02.classList.add('odd')
        else this.list02.classList.add('couples')

        if (this.list03.children.length % 2) this.list03.classList.add("odd")
        else this.list03.classList.add("couples")

        if (this.list04.children.length % 2) this.list04.classList.add("odd")
        else this.list04.classList.add("couples")

        if((this.list05.children).length % 2) this.list05.classList.add('odd')
        else this.list05.classList.add('couples')
    }

    render(targetSelector) {
        const taskMain = document.querySelector(targetSelector)

        let array01 = this.makeArr(this.minNum, this.maxNum, this.minElementVal, this.maxElementVal)
        this.list01 = this.makeList(array01)
        taskMain.append(this.list01)

        let array02 = this.makeArr(this.minNum, this.maxNum, this.minElementVal, this.maxElementVal)
        this.list02 = this.makeList(array02)
        taskMain.append(this.list02)

        let array03 = this.makeArr(this.minNum, this.maxNum, this.minElementVal, this.maxElementVal)
        this.list03 = this.makeList(array03)
        taskMain.append(this.list03)

        let array04 = this.makeArr(this.minNum, this.maxNum, this.minElementVal, this.maxElementVal)
        this.list04 = this.makeList(array04)
        taskMain.append(this.list04)

        let array05 = this.makeArr(this.minNum, this.maxNum, this.minElementVal, this.maxElementVal)
        this.list05 = this.makeList(array05)
        taskMain.append(this.list05)

        const button = document.createElement('button')
        button.innerText = "check data";
        button.addEventListener('click', this.checkingList.bind(this))
        taskMain.append(button)
    }
}

let table = new MakeLists()
table.render('.task-main')