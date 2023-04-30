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

class CreateInputList {
    constructor() {}
    static createBlock(textLabel, textInputPlaceholder) {
    const block = CreateHTMLElem.createElement({ tag: 'div'})

    const label = CreateHTMLElem.createElement({
        tag: 'label',
        props: {innerText: textLabel},
        attributes: {for: textLabel},
    })
    block.append(label)

    const input = CreateHTMLElem.createElement({
        tag: 'input',
        props: {placeholder: textInputPlaceholder},
        attributes: {id: textLabel},
    })
    block.append(input)

    return {block, label, input}
    }
}

class UserBlank {
    constructor(inputArray) {
        this.inputArray = inputArray
        this.inputs = []
    }

    formClick(el) {
        if (el.target.closest('input')) {
            el.target.value = 0
        }
    }

    createForm() {
        this.form = CreateHTMLElem.createElement({
            tag: 'form',
            events: {click: this.formClick.bind(this)},
        })
        for (let i = 0; i < this.inputArray.length; i++) {
            const block = CreateInputList.createBlock(
                this.inputArray[i],
                `Введіть ${this.inputArray[i].toLowerCase()}`
            )
            this.input = block.input;
            this.inputs.push(this.input)
            this.form.append(block.block);
        }
        return this.form
    }

    render(id) {
        const taskList = document.getElementById(id)
        taskList.append(this.createForm())
    }
}

const array = [
    'Вік', 
    'Зріст', 
    'Вага', 
    'Заробітня плата', 
    'Стаж', 
    'Номер відділу', 
    'Порядковий номер'
]

const userBlank = new UserBlank(array)
userBlank.render('task-list')
console.log(userBlank)