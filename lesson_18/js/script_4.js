let list = ['Перемога', 'Мир', 'Розвиток', 'Добро', 'Честь', 'Кохання']

getWishList(list)

function getRandomNum(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getWishList(array) {
    for (let i = 0; i < 3; i++) {
        let pointer = getRandomNum(0, array.length - 1)
        let div = document.createElement('div')
        div.innerHTML = array[pointer]
        document.body.append(div)
        array.splice(pointer, 1)
    }
}