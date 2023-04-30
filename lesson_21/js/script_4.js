class CreateHTMLElem {
    static createElement({tag, attributes, props, events}) {
        const element = document.createElement(tag)
        if (attributes) {
            for (const attributKey in attributes) {
                element.setAttribute(attributKey, attributes[attributKey])
            }
        }
        if (props) {
            for (const propKey in props) {
                element[propKey] = props[propKey]
            }
        }
        if (events) {
            for (const event in events) {
                element.addEventListener(event, events[event])
            }
        }
        return element
    }
}

class CreateTables {
    constructor(tablNum, tablColumn, tablRow, minTablVal, maxTablVal) {
        this.tablNum = tablNum
        this.tablColumn = tablColumn
        this.tablRow = tablRow
        this.minTablVal = minTablVal
        this.maxTablVal = maxTablVal
    }

    getRandomNum() {
        return this.minTablVal + Math.floor(Math.random() * (this.maxTablVal - this.minTablVal + 1))
    }

    addСounter(event) {
        const currentTable = event.target.closest('table')
        let currentCounter = currentTable.getAttribute('counter')
        currentTable.setAttribute('counter', `${++currentCounter}`)
        this.showNumberClicks(event)
    }

    showNumberClicks(event) {
        const parentDiv = event.target.closest('.table-main')
        const addTable = parentDiv.firstElementChild
        const counterTable = parentDiv.lastElementChild
        counterTable.innerText = `Кількість кліків -> ${addTable.getAttribute('counter')}`
    }

    onClick(event) {
        this.addСounter(event)
        const clickEl = event.target

        if (clickEl.closest('td')) {
            const parentTbl = clickEl.closest('table')

            parentTbl.style.borderColor = '#E4514F'
            setTimeout(() => {
                parentTbl.style.borderColor = '#232323'
            }, 600)
        }
    }

    createTable() {
        const table = CreateHTMLElem.createElement({
            tag: 'table',
            attributes: {
                counter: 0,
            },
            events: {
                click: this.onClick.bind(this),
            },
        })

        for (let i = 0; i < this.tablRow; i++) {
            const tr = CreateHTMLElem.createElement({ tag: "tr" });

            for (let j = 0; j < this.tablColumn; j++) {
                const td = CreateHTMLElem.createElement({
                    tag: 'td',
                    props: {
                        innerText: this.getRandomNum(),
                    },
                })
                tr.append(td)
            }
            table.append(tr)
        }
        return table
    }

    render(id) {
        const taskTable = document.getElementById(id)
        for (let i = 0; i < this.tablNum; i++) {
            const tableBlock = CreateHTMLElem.createElement({
                tag: 'div',
                attributes: {
                    class: 'table-main',
                },
            })
            const tableCounter = CreateHTMLElem.createElement({
                tag: 'div',
                attributes: {
                    class: 'table-counter',
                },
            })
            tableBlock.append(this.createTable())
            tableBlock.append(tableCounter)
            taskTable.append(tableBlock)
        }
    }
}

const tabl01 = new CreateTables( 3, 3, 3, 1, 50 )
tabl01.render('task-table')
console.log(tabl01)