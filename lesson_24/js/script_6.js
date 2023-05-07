const arrBooks = [
    {
        title: 'Book №1',
        year: 1996,
        author: 'Klo Klo',
    },
    {
        title: 'Book №2',
        year: 2002,
        author: 'Rop Pou',
    },
    {
        title: 'Book №3',
        year: 2004,
        author: 'Rop Pou',
    },
    {
        title: 'Book №4',
        year: 2010,
        author: 'Hop Top',
    },
    {
        title: 'Book №5',
        year: 2016,
        author: 'Gotu Porol',
    },
    {
        title: 'Book №6',
        year: 2021,
        author: 'Hoper Tupli',
    },
]

const map = new Map()

for (const book of arrBooks) {
    const countBook = map.get(book.author) || 0
    map.set(book.author, countBook + 1)
}
function showAuthorBooks(ob) {
    ob.forEach((value, key) => {
        console.log(`${key} має ${value} книги`)
    })
}

showAuthorBooks(map)
console.log(map)