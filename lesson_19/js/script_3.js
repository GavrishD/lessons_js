class Snowflake {
    getPositionLeftRandom() {
        return Math.floor(Math.random() * 100)
    }
    getSpeedRandom() {
        return 1 + (Math.random() * 30) / 5
    }

    render(containerSelector) {
        this.snowflake = document.createElement('img')
        this.snowflake.className = 'snowflake'
        this.snowflake.src = 'img/icons/snow.svg'
        this.snowflake.style.left = this.getPositionLeftRandom() + '%'
        this.snowflake.style.top = '-6%'

        const speedSnow = this.getSpeedRandom()

        setInterval(() => {
            this.snowflake.style.transition = 'top 0.5s ease-in-out 0s'
            this.snowflake.style.top = parseFloat(this.snowflake.style.top) + speedSnow + '%'
            if (parseFloat(this.snowflake.style.top) > 110) {
                this.snowflake.style.transition = 'none'
                this.snowflake.style.top = "-6%"
                this.snowflake.style.left = this.getPositionLeftRandom() + "%";
            }
        }, 100)
        document.querySelector(containerSelector).append(this.snowflake)
    }
}

window.onload = function() {
    for (let i = 0; i < 100; i++) {
        let snowflake = new Snowflake()
        snowflake.render('.task')
    }
}