function colorRedDiv() {
    let div = this
    div.style.color = "#E4514F"
    while(div.nextElementSibling){
        div = div.nextElementSibling
        div.style.color = "#E4514F"
    }
}

const taskDiv = document.querySelector(".task-hello")
console.log(taskDiv)
for(const div of taskDiv.children){
    div.onclick = colorRedDiv
}