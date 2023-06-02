let client = {
    title: {
            secondName: "Smith",
            firstName: "Piter",
        },
    address: {
                zipCode: "30303",
                city: "Chernihiv",
                street: "Pink",
                num: 14,
            },
    accountNumber: "980978656",
    balance: 567894,
};

class Person {
    constructor({ firstName, surname, age }) {
        this.firstName = firstName;
        this.surname = surname;
        this.age = age;
    };

    get fullName() {
        return this.firstName + ' ' + this.surname;
    };

    set fullName(value) {
        let split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    };

    toString() {
        return `${this.fullName} - ${this.age}`
    };
};

class Address {
    constructor(zipCode, city, street, num) {
        this.zipCode = zipCode;
        this.city = city;
        this.street = street;
        this.num = num;
    };
    toString() {
        return `${this.zipCode} ${this.city} ${this.street} ${this.num}`
    };
};

class Client {
    #balance
    constructor(initData) {
        this.title = new Person(initData);
        this.Address = new Address(initData);

        this.accountNumber = initData.accountNumber;
        this.balance = initData.balance;
    };
    
    get balance() {
        return this.#balance;
    };
    
    set balance(val) {
        if (val < 0) throw new Error('The value i incorrect')
        this.#balance = val
    };

    toString() {
        return `${this.title}\n${this.Address}\n${this.accountNumber}\n${this.balance}`
    };
};

let client1 = new Client({
    firstName: 'Lou', surname: 'Loooou', age: 26,
    zipCode: 90908, city: "City", street: "Holovna", num: 25,
    accountNumber: "564736272839",
    balance: 90876,
});

console.log(client1)