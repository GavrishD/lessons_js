class CardProduct {
    constructor(initialData) {
        Object.assign(this, initialData)
    }

    mouseOver(cardProd) {
        cardProd.classList.add('active')
    }
    mouseLeave(cardProd) {
        cardProd.classList.remove('active')
    }

    render(containerSelector) {
        const cardLaptop = document.createElement('a')
        cardLaptop.className = 'card-laptop'
        cardLaptop.href = this.link
        cardLaptop.target = '_blank'

        const cardCategory = document.createElement('div')
        cardCategory.className = 'card-category'
        if (this.category === 'Топ продаж') cardCategory.classList.add('top')
        if (this.category === 'Акція') cardCategory.classList.add('sale')
        cardCategory.innerHTML = this.category
        cardLaptop.append(cardCategory)

        const imageLaptop = document.createElement('div')
        imageLaptop.className = 'image-laptop'
        cardLaptop.append(imageLaptop)

        const cardImg = document.createElement('img')
        cardImg.className = 'card-img'
        cardImg.src = this.imgSrc
        imageLaptop.append(cardImg)

        const cardTtl = document.createElement('div')
        cardTtl.className = 'card-title'
        cardTtl.innerHTML = this.title
        cardLaptop.append(cardTtl)

        const cardPrc = document.createElement('div')
        cardPrc.className = 'card-price'
        cardPrc.innerHTML = this.price
        cardLaptop.append(cardPrc)

        document.querySelector(containerSelector).append(cardLaptop)

        cardLaptop.onmouseover = this.mouseOver.bind(this, cardLaptop)
        cardLaptop.onmouseleave = this.mouseLeave.bind(this, cardLaptop)
    }
}

const cardItems = [
    {
        imgSrc: 'img/laptops/01.png',
        link: 'https://rozetka.com.ua/ua/acer_nh_qbfeu_00c/p288376303/',
        title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ',
        price: '29 999<span>₴</span>',
        category: 'Топ продаж',
    },
    {
        imgSrc: 'img/laptops/02.png',
        link: 'https://rozetka.com.ua/ua/asus-90nb0ty1-m00vf0/p346597995/',
        title: 'Ноутбук ASUS Laptop X515EA-BQ2066',
        price: '19 999<span>₴</span>',
        category: 'Топ продаж',
    },
    {
        imgSrc: 'img/laptops/03.png',
        link: 'https://rozetka.com.ua/ua/lenovo-82r1007tra/p349968489/',
        title: 'Ноутбук Lenovo<br>IdeaPad 1 15ADA7',
        price: '13 999<span>₴</span>',
        category: 'Акція',
    },
    {
        imgSrc: 'img/laptops/04.png',
        link: 'https://rozetka.com.ua/ua/apple_macbook_air_13_m1_256gb_2020_space_gray/p245161909/',
        title: 'Ноутбук Apple<br>MacBook Air 13" M1',
        price: '43 499<span>₴</span>',
        category: 'Топ продаж',
    },
]

window.onload = function () {
    for (const object of cardItems) {
        const cardProduct = new CardProduct(object)
        cardProduct.render('.task-laptops')
    }
}