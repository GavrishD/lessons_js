class Author {
    constructor(authorName, authorBirthday, authorAbout) {
        this.authorName = authorName
        this.authorBirthday = authorBirthday
        this.authorAbout = authorAbout
    }
}

class PublishingOffice {
    constructor(officeName, registrNumber, yearIntroduction) {
        this.officeName = officeName
        this.registrNumber = registrNumber
        this.yearIntroduction = yearIntroduction
    }
}

class Book {
    constructor(bookAuthor, bookTitle, bookGenre, publishingOffice) {
        this.bookAuthor = bookAuthor
        this.bookTitle = bookTitle
        this.bookGenre = bookGenre
        this.publishingOffice = publishingOffice
    }
}

class SpecialLibrary {
    constructor() {
        this.books = []
    }
    addingBook(book) {
        this.books.push(book)
    }
    putAwayTheBook(book) {
        this.books.filter(item => item !== book)
    }
    sortBooksByTitle(bookTitle) {
        return this.books.filter((item) => item.bookTitle === bookTitle)
    }
    sortBooksByAuthor(author) {
        return this.books.filter(item => item.bookAuthor.includes(author))
    }
    sortBooksByPublishingOffice(publishingOfficeName) {
        return this.books.filter(item => item.publishingOffice.publishingOfficeName === publishingOfficeName)
    }
    sortBooksByGenre(bookGenre) {
        return this.books.filter(item => item.bookGenre === bookGenre)
    }
    addingSection(sectionTitle) {
        this[sectionTitle] = []
    }
    addingBookToSection(sectionTitle, book) {
        if (!this[sectionTitle]) {
            throw new Error(`Розділ "${sectionTitle}" відсутній в особистій бібліотеці`)
        }
        this[sectionTitle].push(book)
    }
    removeBookSection(sectionTitle, book) {
        if (!this[sectionTitle]) {
            throw new Error(`Розділ "${sectionTitle}" відсутній в особистій бібліотеці`)
        }
        this[sectionTitle] = this[sectionTitle].filter(item => item !== book)
    }
    accessibleBook(book) {
        return this.books.includes(book)
    }
    takeAllTheBooks() {
        return this.books
    }
}

const firstAuthor = new Author('Ремарк Еріх Марія', 1898, 'Німецький письменник, представник «загубленого покоління». Його роман "На Західному фронті без змін" (1929) вважається найпопулярнішим антивоєнним романом ХХ століття.')
const secondAuthor = new Author('Ернест Гемінґвей', 1899, 'Американський письменник, військовий кореспондент, лауреат Нобелівської премії з літератури 1954 року.')

const firstPublishingOffice = new PublishingOffice('Книжковий Клуб "Сімейного Дозвілля"', '09876', 2000)
const secondPublishingOffice = new PublishingOffice('Видавництво Старого Лева', '34567', 2001)

const firstBook = new Book([firstAuthor], 'Іскра життя', 'Роман', firstPublishingOffice)
const secondBook = new Book([secondAuthor], 'Старий і море', 'Романнн', secondPublishingOffice)

const mySpecialLibrary = new SpecialLibrary()
mySpecialLibrary.addingBook(firstBook)
mySpecialLibrary.addingBook(secondBook)

const available = mySpecialLibrary.accessibleBook(firstBook)
console.log(available)

const allMyBooks = mySpecialLibrary.takeAllTheBooks()
console.log(allMyBooks)

const booksByTitle = mySpecialLibrary.sortBooksByTitle('Іскра життя')
console.log(booksByTitle)

const booksByAuthor = mySpecialLibrary.sortBooksByAuthor(firstAuthor)
console.log(booksByAuthor)

const booksByPublishingOffice = mySpecialLibrary.sortBooksByPublishingOffice('Книжковий Клуб "Сімейного Дозвілля"')
console.log(booksByPublishingOffice)

const booksByGenre = mySpecialLibrary.sortBooksByGenre('Роман')
console.log(booksByGenre)

mySpecialLibrary.addingSection('Роман')
mySpecialLibrary.addingBookToSection('Роман', firstBook)
mySpecialLibrary.removeBookSection('Роман', firstBook)
mySpecialLibrary.putAwayTheBook(firstBook)