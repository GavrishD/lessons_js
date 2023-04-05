const arrayImg = [
    {
        path: 'img/01.jpg',
        url: 'https://www.youtube.com',
    },
    {
        path: 'img/02.jpg',
        url: 'https://www.google.com',
    },
    {
        path: 'img/03.jpg',
        url: 'https://www.apple.com',
    }
]

class Baner {
    constructor(arrayImg) {
        this.arrayImg = arrayImg
    }
    getBanerRandom() {
        let randomImg = Math.floor(Math.random() * this.arrayImg.length)
        return this.arrayImg[randomImg]
    }
    result() {
        let randomBnr = this.getBanerRandom()
        document.write(`<a target=# href='${randomBnr.url}'><img src='${randomBnr.path}'></a>`)
    }
}

const baner = new Baner(arrayImg)
baner.result()