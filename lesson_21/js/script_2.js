function insertValue(event) {
    if(event.target.tagName === 'INPUT') {
        let input = event.target
        let number = parseInt(input.value)
        while(input.nextElementSibling){
            input = input.nextElementSibling
            input.value = ++number
        }
        while(input.previousElementSibling){
            input = input.previousElementSibling
            input.value = --number
        }
    }
}
document.querySelector(".task-inputs").oninput = insertValue