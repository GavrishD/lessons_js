class Product {
    constructor(title, price, numberUnits) {
        this.title = title
        this.price = price 
        this.numberUnits = numberUnits
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return this.price
            case 'string':
                return `${this.title} - ${this.price * this.numberUnits}₴`
                default:
                    return this.title
        }
    }
}

class Shop {
    constructor(groceryList) {
        this.groceryList = groceryList
        this.curIndex = 0
    }
    [Symbol.iterator](){
        this.curIndex = 0
        return this
    }
    next(){
        if (this.curIndex < this.groceryList.length){
            const curProduct = this.groceryList[this.curIndex]
            this.curIndex++
            return {done: false, value: String(curProduct)}
        } else return {done: true}
    }
}

const groceryList = [
    new Product('Banan', 50, 50),
    new Product('Lemon', 23, 45),
    new Product('Apple', 35, 100),
    new Product('Lime', 45, 150),
]

const shop = new Shop(groceryList)

for (const grocery of shop) {
    console.log(grocery)
}

const arrGrocery = [...shop]
product.innerText = `${arrGrocery},`