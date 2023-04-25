class Product {
    constructor(minProdValue, maxProdValue, prodPrice, imageSrc) {
        this.minProdValue = minProdValue
        this.maxProdValue = maxProdValue
        this.prodPrice = prodPrice
        this.imageSrc = imageSrc
        this.actualProdValue = 0
    }
    set ActualProdValue(newVal) {
        this.actualValue.innerText = newVal;
    }
    resString(val) {
        return ` ${val * this.prodPrice} грн.`
    }
    set SummaryProdValue(newSum) {
        this.summaryProdValue.innerHTML = this.resString(newSum)
    }
    controlButtonState() {
        if (this.actualProdValue <= 0) {
            this.buttonMinus.setAttribute('disabled', 'true')
        } else if (this.actualProdValue >= 10) {
            this.buttonPlus.setAttribute('disabled', 'true')
        } else {
            this.buttonMinus.removeAttribute('disabled')
            this.buttonPlus.removeAttribute('disabled')
        }
    }
    increaseActualProdValue() {
        this.ActualProdValue = ++this.actualProdValue
    }
    decreaseActualProdValue() {
        this.ActualProdValue = --this.actualProdValue
    }
    render(productId) {
        const container = document.getElementById(productId);

        const prodDescription = document.createElement('div')
        prodDescription.className = "product-description"
        container.append(prodDescription)

        const prodImage = document.createElement('img')
        prodImage.src = this.imageSrc
        prodImage.className = 'product-img'
        prodDescription.append(prodImage)

        const prodTitle = document.createElement('h4')
        prodTitle.className = 'product-title'
        prodTitle.innerText = 'Телевізор Hisense 55A63H'
        prodDescription.append(prodTitle)

        const prodRegister = document.createElement('div')
        prodRegister.className = 'product-register'
        container.append(prodRegister)

        this.buttonMinus = document.createElement('button')
        this.buttonMinus.className = 'product-btn'
        this.buttonMinus.innerText = '-'
        prodRegister.append(this.buttonMinus)
        this.buttonMinus.onclick = () => {
            this.decreaseActualProdValue()
            this.SummaryProdValue = this.actualProdValue
            this.controlButtonState()
        }

        this.actualValue = document.createElement("div");
        this.actualValue.className = "product-val";
        this.ActualProdValue = this.actualProdValue
        this.controlButtonState()
        prodRegister.append(this.actualValue)

        this.buttonPlus = document.createElement('button')
        this.buttonPlus.className = 'product-btn'
        this.buttonPlus.innerText = '+'
        prodRegister.append(this.buttonPlus)
        this.buttonPlus.onclick = () => {
            this.increaseActualProdValue()
            this.SummaryProdValue = this.actualProdValue
            this.controlButtonState()
        }

        const prodSum = document.createElement('div')
        prodSum.className = 'product-sum'
        prodSum.innerText = 'До оплати:'

        this.summaryProdValue = document.createElement('span')
        this.summaryProdValue.className = 'product-price'
        this.SummaryProdValue = this.actualProdValue
        prodSum.append(this.summaryProdValue)

        container.append(prodSum)
    }
}

window.onload = () => {
    const product = new Product(1, 10, 16999, 'img/task_01/01.png')
    product.render("product")
    console.log(product)
}