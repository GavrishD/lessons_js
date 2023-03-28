let companyWebsites = [
    {
        companyName: 'The Big Bang',
        companyOwner: 'Cooper',
        sponsors: [
            {
                surname: 'Hofstadter',
                name: 'Leonard',
                investment: 22000,
            },
            {
                surname: 'Wolowitz',
                name: 'Howard',
                investment: 20000,
            },
            {
                surname: 'Koothrappali',
                name: 'Rajesh',
                investment: 26000,
            },
        ],
        siteReleaseYear: 2006,
        siteCost: 40000,
    },
    {
        companyName: 'The IT Crowd',
        companyOwner: 'Maurice Moss',
        sponsors: [
            {
                surname: 'Moss',
                name: 'Maurice',
                investment: 35000,
            },
            {
                surname: 'Trenneman',
                name: 'Roy',
                investment: 30000,
            },
            {
                surname: 'Barber',
                name: 'Jen',
                investment: 25000,
            },
        ],
        siteReleaseYear: 2002,
        siteCost: 200000,
    },
    {
        companyName: 'Silicon Valley',
        companyOwner: 'Erlich Bachmann',
        sponsors: [
            {
                surname: 'Hendrix',
                name: 'Richard',
                investment: 40000,
            },
            {
                surname: 'Chugtai',
                name: 'Dinesh',
                investment: 45000,
            },
            {
                surname: 'Gilfoyle',
                name: 'Bertram',
                investment: 35000,
            },
        ],
        siteReleaseYear: 2015,
        siteCost: 300000,
    }
]
console.log(companyWebsites)


// 1) Загальна вартість усіх сайтів------------------------------------------
const totalCostAllSites = companyWebsites.reduce(
    (prevSum, website) => prevSum + website.siteCost,
    0
)


// 2) Кількість сайтів, що було зроблено між 2000 та 2009 рр.----------------
let umberSitesMadeBetween2000_2009 = companyWebsites.reduce(
    (prevSum, website) => {
        if (website.siteReleaseYear >= 2000 && website.siteReleaseYear <= 2009) 
        return ++prevSum
        else return prevSum
    },
    0
)


// 3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000
let numberSitesAmountSponsorship_100000 = companyWebsites.reduce(
    (prevTotal, sponsorship) => {
        let sumInvestments = sponsorship.sponsors.reduce(
            (prevSum, invest) => (prevSum += invest.investment),
            0
        )
        if (sumInvestments > 100000)
        return ++prevTotal
        else return prevTotal
    }, 0
)


// 4) Загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
let generalListAllSponsors = []
for (const element of companyWebsites) {
    for (const sponsor of element.sponsors) {
        generalListAllSponsors.push(`${sponsor.surname} ${sponsor.name}`)
    }
}


// 5) Знайти рік, коли прибуток був найбільшим-------------------------------
let numMax = -Infinity
let yearProfitGreatest
for (const el of companyWebsites) {
    if (el.siteCost > numMax) {
        numMax = el.siteCost
        yearProfitGreatest = el.siteReleaseYear
    }
}


// 6) Упорядкувати список за спаданням прибутку------------------------------
let listDescendingOrderProfit = companyWebsites.map((el) => el.siteCost)
let copyCompWeb = JSON.parse(JSON.stringify(companyWebsites))
for (i = 1; i < listDescendingOrderProfit; i++) {
    let elemen = listDescendingOrderProfit[i]
    let object = copyCompWeb[i]
    let ind = i - 1
    while (ind >= 0 && listDescendingOrderProfit[ind] < elemen) {
        [listDescendingOrderProfit[ind], listDescendingOrderProfit[ind + 1]] = [
            listDescendingOrderProfit[ind + 1],
            listDescendingOrderProfit[ind],
        ]
        [copyCompWeb[ind], copyCompWeb[ind + 1]] = [
            copyCompWeb[ind + 1],
            copyCompWeb[ind],
        ]
        ind = ind - 1 
    }
}
console.log(copyCompWeb)


// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
let costLessList_10000 = companyWebsites.filter((el) => el.siteCost < 10000)
console.log(costLessList_10000)

let costLessMore_10000 = companyWebsites.filter((el) => el.siteCost > 10000)
console.log(costLessMore_10000)


// Результат-----------------------------------------------------------------
document.write(`1) Загальна вартість усіх сайтів: ${totalCostAllSites}$<br><br>2) Кількість сайтів, що було зроблено між 2000 та 2009 рр: ${umberSitesMadeBetween2000_2009}<br><br>3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${numberSitesAmountSponsorship_100000}<br><br>4) Загальний список усіх спонсорів: ${generalListAllSponsors}<br><br>5) Прибуток був найбільшим у ${yearProfitGreatest} - ${numMax}$`)