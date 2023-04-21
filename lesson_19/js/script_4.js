class Stars {
    constructor(starsNumber, starSrc, minStar, maxStar) {
        this.starsNumber = starsNumber
        this.starSrc = starSrc
        this.minStar = minStar
        this.maxStar = maxStar
    }

    getRandomMove() {
        return 1 + (Math.random() * 25) / 5
    }
    getRandomPosition() {
        return 1 + Math.floor(Math.random() * 100)
    }

    render(containerSelector) {
        for (let i = 0; i < this.starsNumber; i++) {
            const star = document.createElement('img')
            star.className = 'star'
            star.src = this.starSrc
            star.style.width = this.minStar + 'px'
            star.style.left = this.getRandomPosition() + '%'
            star.style.top = this.getRandomPosition() + '%'
            document.querySelector(containerSelector).append(star)

            const move = this.getRandomMove()
            setInterval(() => {
                star.style.transition = 'width 0.5s ease-in-out 0s'
                star.style.width = parseFloat(star.style.width) + move + 'px'
                if (parseFloat(star.style.width) > this.maxStar) {
                    star.style.transition = 'none'
                    star.style.width = this.minStar + 'px'
                    star.style.left = this.getRandomPosition() + '%'
                    star.style.top = this.getRandomPosition() + '%'
                }
            }, 200)
        }
    }
}

window.onload = function() {
    let stars = new Stars(80, 'img/icons/star.svg', 10, 25)
    stars.render('.task')
}