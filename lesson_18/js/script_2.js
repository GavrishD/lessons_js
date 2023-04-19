function goConverter(courseDollar,courseEuro) {
    const hryvn = parseFloat(document.querySelector('.hryvnia').value)
    document.querySelector('.dollar').value = (hryvn / courseDollar).toFixed(2)
    document.querySelector(".euro").value = (hryvn / courseEuro).toFixed(2);
}

window.onload = function() {
    document.querySelector(".convert-btn").onclick = () => goConverter(37, 40)
}