class Reminder {
    static reminderInitial
    static indicator = 0

    constructor(text, interval) {
        if (Reminder.reminderInitial) {
            return Reminder.reminderInitial
        }
        this.text = text
        this.interval = interval
        this.timer = null
        Reminder.reminderInitial = this
    }
    starting() {
        this.timer = setInterval(() => {
            Reminder.indicator++
            document.write(`${this.text} indicator: ${Reminder.indicator}<br>`)
        }, this.interval * 1000)
    }
    finishing() {
        clearInterval(this.timer)
    }
    nextText(newText) {
        this.text = newText
    }
}

const reminder = new Reminder('Hello', 1) 

reminder.starting()

setTimeout(() => {
    reminder.finishing()
}, 12000)

setTimeout(() => {
    reminder.nextText('See you later')
}, 6000)