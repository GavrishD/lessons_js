class CompanyFoundationDate {
    constructor(year, month) {
        this.year = year
        this.month = month
    }
}

class CompanyServices {
    constructor(title, price, deadline) {
        this.title = title
        this.price = price
        this.deadline = deadline
    }
}

class CompanyBranchAddress {
    constructor(country, city, street, houseNum) {
        this.country = country
        this.city = city
        this.street = street
        this.houseNum = houseNum
    }
    toString() {
        return `${this.country} ${this.city} ${this.street} ${this.houseNum}`
    }
}

class Company {
    constructor(name, {year, month}, arrServices, arrOffices) {
        this.name = name
        this.companyFoundationDate = new CompanyFoundationDate(year, month)
        this.service = arrServices.map((el) => {
            const {title, price, deadline} = el
            return new CompanyServices(title, price, deadline)
        })
        this.offices = arrOffices.map((el) => {
            const {country, city, street, houseNum} = el
            return new CompanyBranchAddress(country, city, street, houseNum)
        })
    }
    getCompanyYearsOld(yearCurrent) {
        return yearCurrent - this.companyFoundationDate.year
    }
    toString() {
        return `Фірма ${this.name} заснована у ${this.companyFoundationDate.year} році. Офіси розташовані в ${this.offices[0].city} і ${this.offices[1].city}. Фірма надає такі послуги: ${this.service[0].title}, ${this.service[1].title}.`;
    }
    showOfficesCompanyInCity(city) {
        for (const officeComp of this.offices) {
            if (city === officeComp.city) {
                document.write(officeComp)
            }
        }
    }
    showServicesCompany(money, time) {
        const timeAvailable = parseInt(time)
        document.write(`За зазначені гроші, строк - можуть бути виконані такі роботи:<br>`)
        for (const services of this.service) {
            const timeService = parseInt(services.deadline)
            console.log(services.price, services.deadline, timeService)
            if (services.price < money && timeService < timeAvailable) {
                document.write(`${services.title}<br>`)
            }
        }
    }
}

const company = new Company(
    'Book',
    {year: 2023, month: 'March'},
    [
        {title: 'typography', price: 1500, deadline: '7 days'},
        {title: 'redaction', price: 1200, deadline: '10 days'},
    ],
    [
        {country: 'Ukraine', city: 'Kyiv', street: 'Pink Street', houseNum: '14'},
        {country: 'Poland', city: 'Warsaw', street: 'Green Street', houseNum: '20'},
    ]
)
console.log(company)