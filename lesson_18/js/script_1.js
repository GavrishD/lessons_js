function action() {
    const firstNumber = parseFloat(document.querySelector('.first-num').value)
    const secondNumber = parseFloat(document.querySelector('.second-num').value)
    let result
    switch (this.value) {
        case '+':
            result = firstNumber + secondNumber
            break;
        case '-':
            result = firstNumber - secondNumber
            break;
        case '*':
            result = firstNumber * secondNumber
            break;
        case '/':
            result = firstNumber / secondNumber
            break;
    }
    document.querySelector('.result').value = result
}

window.onload = function() {
    document.querySelector('.addition').onclick = action
    document.querySelector('.subtraction').onclick = action
    document.querySelector('.multiplication').onclick = action
    document.querySelector('.division').onclick = action
}