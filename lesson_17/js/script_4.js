class ManufacturerCompany {
    constructor(companyName, companyNumber) {
        this.companyName = companyName
        this.companyNumber = companyNumber
    }
}

class ProductCompany {
    constructor(productName, measurementUnit, quantityProduct, companyName, companyNumber) {
        this.productName = productName
        this.measurementUnit = measurementUnit
        this.quantityProduct = quantityProduct
        this.manufacturerCompany = new ManufacturerCompany(companyName, companyNumber)
    }
}

class Storage {
    constructor() {
        this.products = []
    }
    newProduct(product) {
        this.products.push(product)
    }
    removeProd(productOfName, quantityProduct) {
        const productNum = this.products.findIndex(product => product.productName === productOfName)
        if (productNum !== -1) {
            const product = this.products[productNum]
            if (product.quantityProduct >= quantityProduct) {
                product.quantityProduct -= quantityProduct
                if (product.quantityProduct === 0) {
                    this.products.splice(productNum, 1)
                }
                return true
            }
        }
        return false
    }

    filterProductName(productName) {
        return this.products.filter(product => product.productName === productName)
    }

    filterCompanyName(companyName) {
        return this.products.filter(product => product.manufacturerCompany.companyName === companyName)
    }
}

const productFirst = new ProductCompany('Сир', 'шт', 2, 'Сирок', '09876')
const productSecond = new ProductCompany('Молоко', 'л', 4, 'Молокія', '09854')
const productThird = new ProductCompany('Яйця', 'шт', 10, 'Біле', '03456')
const productFourth = new ProductCompany('Банан', 'кг', 3, 'Банановий сад', '43546')

const storage = new Storage()

storage.newProduct(productFirst)
storage.newProduct(productSecond)
storage.newProduct(productThird)
storage.newProduct(productFourth)

console.log(storage.products)

storage.removeProd('Сир', 1)
console.log(storage.products)

let filterOne = storage.filterProductName('Сир')
console.log(filterOne)

let filterTwo = storage.filterCompanyName('Сирок')
console.log(filterTwo)