const namesArrayBoys = ['Андрій', 'Кирило', 'Данило', 'Олексій', 'Олександр']
const namesArrayGirls = ['Анастасія', 'Альона', 'Інна', 'Лія', 'Світлана']

class HeadOfDances {
    constructor(namesBoys, namesGirls) {
        this.namesBoys = namesBoys
        this.namesGirls = namesGirls
    }
    getRanNameBoy() {
        let randomName = Math.floor(Math.random() * this.namesBoys.length)
        return this.namesBoys[randomName]
    }
    getRanNameGirl() {
        let randomName = Math.floor(Math.random() * this.namesGirls.length)
        return this.namesGirls[randomName]
    }
    getDancingPair() {
        alert(`Танцювальна пара: ${this.getRanNameBoy()} та ${this.getRanNameGirl()}`)
    }
    range() {
        setInterval(() => {
            this.getDancingPair()
        }, 8000)
    }
}

const dancesHead = new HeadOfDances(namesArrayBoys, namesArrayGirls)
dancesHead.range()