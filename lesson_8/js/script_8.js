const imageYou = `img/youtube.png`
const headerTitle = 'Переходь на YouTube'
const websiteLink = 'https://www.youtube.com'

const bannerYou = mediaBanner(imageYou, headerTitle, websiteLink)

function mediaBanner(imageYou, headerTitle = '', websiteLink ='#') {
    const bannerHeader = `<h3>${headerTitle}</h3>`
    const bannerContent = `<img src='${imageYou}' alt='Banner'>`
    const bannerYou = `<a href='${websiteLink}'>${bannerContent}${bannerHeader}</a>`
    return bannerYou
}

document.write(`${bannerYou}`)