function getTravelPrice() {
    const transportPrice = parseFloat(document.querySelector('#transport').value)
    const listInput = document.querySelectorAll('input')
    const amout = document.querySelector('.amount')
    let totalPrice = 0
    totalPrice += transportPrice
    for (const input of listInput) {
        if (input.checked) totalPrice += parseFloat(input.value)
    }
    amout.innerHTML = totalPrice
}

document.querySelector(".price-total").onclick = getTravelPrice