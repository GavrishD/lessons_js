function birthYears() {
    const userBirthYear = parseFloat(document.querySelector('.year').value)
    const thisYear = new Date().getFullYear()
    document.querySelector(".birth").append(`Ваш вік ${thisYear - userBirthYear} р.`)
}

window.onload = () => {
    document.querySelector(".year").onchange = birthYears
}