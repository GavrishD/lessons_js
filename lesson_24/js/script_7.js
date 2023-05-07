const siteVisitors = [
    {
        name: 'Harry',
        login: 4556,
    },
    {
        name: 'Polli',
        login: 2335,
    },
    {
        name: 'Rikky',
        login: 8998,
    },
    {
        name: 'Tom',
        login: 6789,
    },
    {
        name: 'Tom',
        login: 6789,
    },
    {
        name: 'lilly',
        login: 2334,
    },
]

function showSiteVisitors(arr) {
    const map = new Map()
    for (const visitor of siteVisitors) {
        const vicitorCount = map.get(visitor.login) || 0
        map.set(visitor.login, vicitorCount + 1)
    }
    map.forEach((value, key) => {
        console.log(`Клієнт із логіном ${key} відвідав сайт ${value} разів`)
    })
}
showSiteVisitors(siteVisitors)