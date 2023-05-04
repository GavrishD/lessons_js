class Client {
    constructor(userId, userName, userAccount){
        this.userId = userId
        this.userName = userName
        this.userAccount = userAccount
    };
    addingToBalance(value) {
        this.userAccount += value
    };
    withdrawalMoneyBalance(value) {
        if ((this.userAccount - value) < 0) alert('На рахунку недостатньо грошей')
        else this.userAccount -= value
    }
    toString(){
        return `<br>Клієнт <span>${this.userName}</span>, залишок - <span>${this.userAccount}$</span>.`
    }
}

const clientList = []

let ordinaryClientOne = new Client(565456, 'Piter Pan', 8000)
clientList.push(ordinaryClientOne)

let ordinaryClientTwo = new Client(676875, 'Bella Bella', 10000)
clientList.push(ordinaryClientTwo)

let ordinaryClientThree = new Client(897654, 'Din Din', 12000)
clientList.push(ordinaryClientThree)

ordinaryClientOne.toString()
//----------------------------------------------------------------
class GoldenClient extends Client{
    constructor(userId, userName, userAccount){
        super(userId, userName, userAccount)
    }
    toString(){
        return `<br>Golden кліент <span>${this.userName}</span>, залишок - <span>${this.userAccount}$</span>`
    }
}

let goldenClientOne = new GoldenClient(1023, 'Roy Roy', 20000)
clientList.push(goldenClientOne)

let goldenClientTwo = new GoldenClient(1334, 'Klo Klo', 22000)
clientList.push(goldenClientTwo)

let goldenClientThree = new GoldenClient(1432, 'Joi Joi', 28000)
clientList.push(goldenClientThree)
//----------------------------------------------------------------
class Bank{
    constructor(userList){
        this.userList = userList
    }

    getClientCategory(){
        let arrayOne = []
        let arrayTwo = []
        for(const client of this.userList){
            if(client instanceof GoldenClient) arrayOne.push(client)
            else arrayTwo.push(client)
        }
        return {arrayOne, arrayTwo}
    }

    getValueTotal(){
        let total = 0
        for(const client of this.userList){
            total += client.userAccount
        }
        return total
    }

    render(targetSelector){
        const mainBlock = document.querySelector(targetSelector)
        const mainList = this.getClientCategory()

        const goldenClient = document.createElement('p')
        goldenClient.innerHTML = mainList.arrayOne
        mainBlock.append(goldenClient)

        const ordinaryClient = document.createElement('p')
        ordinaryClient.innerHTML = mainList.arrayTwo
        mainBlock.append(ordinaryClient)

        const totalVal = document.createElement('p')
        totalVal.innerHTML = `Загальна кількість грошей: <span>${this.getValueTotal()}$</span>`
        mainBlock.append(totalVal)
    }
}

let bank = new Bank(clientList)
bank.render('.bank')
console.log(bank.getValueTotal())