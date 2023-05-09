const apiEbird = {
    allList: 'https://api.ebird.org/v2/data/obs/KZ/recent',
    getById:(id) => {
        'https://api.ebird.org/v2/data/obs/KZ/recent'
    }
}

// це завдання начебто розумію і не розумію в один час,
// знаю, що тут помилки, підкажіть, підкажіть будь ласка, як зробити правильно

async function showAllLisrBird() {
    const url = apiEbird.allList
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then(data => data.data)
        .then(array => resolve(array.map(element => element.id)))
        .catch((err) => reject(err))
    })
}

function getRandomPosition(list) {
    const ranIndex = Math.floor(Math.random() * list.length)
    console.log(list[ranIndex])
    return list[ranIndex]
}

async function showListById(id) {
    const url = apiEbird.getById(id)
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => resolve (`comName: ${data.comName}, sciName: ${data.sciName}`))
        .catch((err) => reject(err))
    })
}

function createDiv(list) {
    const div = document.createElement('div')
    div.innerText = list
    return div
}

async function result() {
    let birdList = await showAllLisrBird()
    console.log(birdList)
    let randomList = getRandomPosition(birdList)
    console.log(randomList)
    let lists = await showListById(randomList)
    birdList.append(createDiv(lists))
}

result()