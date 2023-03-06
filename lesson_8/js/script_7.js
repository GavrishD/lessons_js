const randomPicture = getImages(
    'img/01.png',
    'img/02.png',
    'img/03.png',
    'img/04.png'
)

function getImages(image1, image2, image3, image4) {
    const randomImage = Math.floor(Math.random() * 4)
    let result 

    switch (randomImage) {
        case 0: 
            result = image1
            break
        case 1: 
            result = image2
            break
        case 2: 
            result = image3
            break
        case 3: 
            result = image4
    }
    return `<img src='${result}' alt='image ${randomImage}'`;
}

document.write(`${randomPicture}`)
