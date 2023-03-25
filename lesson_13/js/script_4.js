// Функція - літера----------------------------------------------------------
function getLetterWord(word) {
    let i = 1 - 1
    function getWord() {
        let j = word.charAt(i)
        i++
        return j
    }
    return getWord
}
let wordsGame = 'Apple'
let letterWord = getLetterWord(wordsGame)

// Функція - гра-------------------------------------------------------------
function getLetterGame(word) {
    let num = 0
    let guessLetter = 0
    do {
        const messageUser = prompt('Логотип якої компанії є надкусане яблуко? Вказуйте по одній букві англійськими літерами', 'A')
        let letterUs = letterWord()
        if (messageUser === letterUs) {
            alert('Ви вгадали літеру')
            guessLetter++
        } else alert('Ви не вгадали літеру, подумайте ще')
        num++
    } while (num < word.length)
    return guessLetter
}
let letterGame = getLetterGame(wordsGame)


// Результат-----------------------------------------------------------------
document.write(`Було загадано слово "Apple", ви вгадали ${letterGame} літер`)