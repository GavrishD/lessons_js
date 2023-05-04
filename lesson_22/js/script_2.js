// спільний клас предок FieldForCharacters
class FieldForCharacters{
    constructor(coordinateX, coordinateY, imgLink, intervalTime){
        this.coordinateX = coordinateX
        this.coordinateY = coordinateY
        this.imgLink = imgLink
        this.intervalTime = intervalTime
    }
    render(targetSelector){
        const mainBlock = document.querySelector(targetSelector)
        mainBlock.style.position = 'relative'
        this.img = document.createElement('img')
        this.img.src = this.imgLink
        this.img.style.position = 'absolute'
        this.img.style.left = this.coordinateX + 'px'
        this.img.style.top = this.coordinateY + 'px'
        mainBlock.append(this.img)
    }
}

// клас House
class House extends FieldForCharacters {
    transformScale(){
        setInterval((() => {
            this.img.style.transform = 'scale(1.07)'
        }), this.intervalTime * 1000
        )
        this.defaultData()
    }
    defaultData(){
        setInterval((() => {
            this.img.style.transform = 'scale(1.01)'
        }), (this.intervalTime + 2) * 1000
        )
    }
}
let house = new House(600, 250, 'img/task_2/house.png', 1)
house.render('.task-main')
house.transformScale()

// клас Dog
class Dog extends FieldForCharacters {
    transformMove(){
        setInterval((() => {
            this.img.style.top = parseInt(this.img.style.top) + 8 + 'px'
        }), this.intervalTime * 110
        )
    }
}
let dog = new Dog(200, 100, 'img/task_2/dog.png', 2.5)
dog.render('.task-main')
dog.transformMove()

// клас Bird
class Bird extends FieldForCharacters {
    getRandomNum(min, max){
        return min + Math.floor(Math.random() * (max - min + 1))
    }
    transformPosition(){
        setInterval((() => {
            this.img.style.top = parseInt(this.img.style.top) - this.getRandomNum(0, 2) + 'px'
            this.img.style.left = parseInt(this.img.style.left) + this.getRandomNum(0, 2) + 'px'
            this.img.style.top = parseInt(this.img.style.top) + this.getRandomNum(0, 2) + 'px'
            
        }), this.intervalTime * 110)
    }
}
let bird = new Bird(10, 50, 'img/task_2/bird.png', 1)
bird.render('.task-main')
bird.transformPosition()
