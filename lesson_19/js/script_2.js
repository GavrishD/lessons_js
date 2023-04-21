class AthletesItems {
    constructor(athletsList) {
        this.athletsList = athletsList
    }

    addAthlete() {
        for (const element of this.athletsList) {
            const athlet = document.createElement("div")
            athlet.className = 'athlet'
            this.totalListBody.append(athlet)

            const athletName = document.createElement('div')
            athletName.innerHTML = element
            athlet.append(athletName)

            const icon = document.createElement('img')
            icon.className = 'arrow'
            icon.src = this.arrowGreenSrc
            athlet.append(icon)
        }
    }

    enumerationAthlets(athlet, arrow) {
        if (!athlet.classList.contains('active')) {
            athlet.classList.add('active')
            athlet.remove()
            this.competititonListBody.append(athlet)
            arrow.src = this.arrowRedSrc
        } else {
            athlet.classList.remove('active')
            athlet.remove()
            this.totalListBody.append(athlet)
            arrow.src = this.arrowGreenSrc
        }
    }

    render(containerSelector) {
        this.arrowGreenSrc = 'img/icons/arrow_yes.svg'
        this.arrowRedSrc = 'img/icons/arrow_no.svg'
    

//--------------------------General list--------------------------

    const totalItems = document.createElement('div')
    totalItems.className = 'total-items'

    const totalItemsTitle = document.createElement('h3')
    totalItemsTitle.innerHTML = 'Загальний список'
    totalItems.append(totalItemsTitle)

    this.totalListBody = document.createElement('div')
    this.totalListBody.classList.add('total-list-block', 'list-block')
    totalItems.append(this.totalListBody)
    this.addAthlete()

//--------------------------Competition--------------------------

    const competitionItems = document.createElement('div')
    competitionItems.className = 'competition-items'

    const competitionItemsTitle = document.createElement('h3')
    competitionItemsTitle.innerHTML = 'Обрані для змагання'
    competitionItems.append(competitionItemsTitle)

    this.competititonListBody = document.createElement('div')
    this.competititonListBody.classList.add ('competititon-list-block', 'list-block')
    competitionItems.append(this.competititonListBody)

//--------------------------Add lists--------------------------

    const elementTarget = document.querySelector(containerSelector)
    elementTarget.append(totalItems)
    elementTarget.append(competitionItems)

    const arrowsItems = document.querySelectorAll('.arrow')
    const athletItems = document.querySelectorAll('.athlet')
    console.log(arrowsItems)

    for (let i = 0; i < this.athletsList.length; i++) {
        athletItems[i].onclick = this.enumerationAthlets.bind(this, athletItems[i], arrowsItems[i])
        }
    }
}

athletsList = [
    'John Depp',
    'Sara Wik',
    'Den Miro',
    'Alan Woo',
    'Olga Sich',
    'Ivan Hal',
]

window.onload = function() {
    const athletes = new AthletesItems(athletsList)
    athletes.render('.task-sportsman')
}