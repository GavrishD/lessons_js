class DinamicSearch {
    constructor(listOfEmployees) {
        this.listOfEmployees = listOfEmployees
    }

    searches() {
        const text = this.searchBlockInput.value.toLowerCase()
        this.currentList = this.listOfEmployees.filter((name) => name.toLowerCase().includes(text))

        this.bodyBlock.innerHTML = ''
        this.bodyBlock.append(this.createListOfEmployees(this.currentList));
    }

    createListOfEmployees(namesArr) {
        const list = document.createElement('ul')
        list.className = 'search-block__list'

        for (const name of namesArr) {
            const li = document.createElement('li')
            li.className = 'search-block__item'
            li.innerText = name
            list.append(li)
        }
        return list
    }

    createListOfEmployeesBlock(namesArr) {
        const searchListBlock = document.createElement('div')
        searchListBlock.className = "search-block"

        const searchHeaderBlock = document.createElement('div')
        searchHeaderBlock.className = "search-block__header";
        searchListBlock.append(searchHeaderBlock)

        const searchLabelBlock = document.createElement('label')
        searchLabelBlock.classList = 'search-block__label'
        searchLabelBlock.innerText = 'Имʼя'
        searchHeaderBlock.append(searchLabelBlock)

        this.searchBlockInput = document.createElement('input')
        this.searchBlockInput.type = 'text'
        this.searchBlockInput.placeholder = 'Я шукаю...'
        this.searchBlockInput.classList = 'search-block__input'
        searchHeaderBlock.append(this.searchBlockInput)

        const searchTitleBlock = document.createElement('h3')
        searchTitleBlock.className = 'search-block__title'
        searchTitleBlock.innerText = 'Працівники'
        searchHeaderBlock.append(searchTitleBlock)

        this.searchBlockInput.oninput = this.searches.bind(this)

        this.bodyBlock = document.createElement('div')
        this.bodyBlock.className = 'search-block__body'
        searchListBlock.append(this.bodyBlock)

        this.bodyBlock.append(this.createListOfEmployees(namesArr))

        return searchListBlock
    }

    render(id) {
        const search = document.getElementById(id)
        search.append(this.createListOfEmployeesBlock(this.listOfEmployees))
    }
}

const employees = ['Іванов І.І.', 'Петров П.П.', 'Скрипка С.П.', 'Гончаренко Г.О.', 'Івась І.І.']

window.onload = () => {
    const dinamicSearch = new DinamicSearch(employees)
    dinamicSearch.render("search");
}