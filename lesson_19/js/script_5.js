class Bayractar {
    constructor(imageSrc, interval) {
        this.imageSrc = imageSrc
        this.interval = interval
        this.indicator = 0
    }

    getRandomPosition() {
        return Math.floor(Math.random() * 95)
    }

    destroyTheTank(tank, time) {
        tank.style.transform = 'scale(0) rotate(360deg)'
        clearInterval(time)
        setTimeout(() => {
            tank.remove()
            document.querySelector(".indicator").innerHTML = ++this.indicator
        }, 1000)
    }
    render(containerSelector) {
        setInterval(() => {
            const tank = document.createElement('img')
            tank.className = 'tank'
            tank.src = this.imageSrc
            tank.style.left = this.getRandomPosition() + '%'
            tank.style.top = '-9%'
            tank.style.transition = 'top 0.5s ease-in-out 0s, transform 1s ease-in-out 0s'
            document.querySelector(containerSelector).append(tank)
            let time = setInterval(() => {
                tank.style.top = parseFloat(tank.style.top) + 3 + '%'
                if (parseFloat(tank.style.top) > 100) tank.remove()
            }, 250)
            tank.onclick = this.destroyTheTank.bind(this, tank, time)
        }, this.interval * 1000)
    }
}

window.onload = function() {
    const bayractar = new Bayractar('img/tank.png', 2)
    bayractar.render('.task')
}