class Workshop {

    constructor(initData) {
        Object.assign(this, initData);
        this.participants = [];
    };
    addStudent(newStudent) {
        this.participants.push({
            id: new Date().getTime(),
            data: newStudent,
        });
    };
    removeStudentById(studentIdToRemove) {
        this.participants = this.participants.filter(
            (item) => item.id !== studentIdToRemove
        );
    };
    removeStudent(studentToRemove){
        this.participants = this.participants.filter(
            (item) => item !== studentToRemove
        );
    };
    isStudentVisitingWorkshop(student) {
        return this.participants.includes(student);
    };
    toString() {
        return `${this.title} : <br> ${this.participants.map(
            (item) => item.toString() + '<br>'
        )}`
    };
};

class WorkshopManager {
    constructor(studentsList, workshops) {
        this.studentsList = studentsList;
        this.workshops = workshops;
    };
    addStudentsToWorkshop() {
        let workshopsNames = Object.keys(workshops);
        for (const student of this.studentsList) {
            const selectedWorkshopNumbers = prompt(
                `Виберіть через кому номери гуртків для\n${student} \n \n1. Math\n2.History\n3. Geography`
            )

            .split(',')
            .map((item) => parseInt(item) - 1)

            for (const workshopIndex of selectedWorkshopNumbers) {
                const workshopKey = workshopsNames[workshopIndex];
                this.workshops[workshopKey].participants.push(student)
            }
        }
    }
    printData() {
        for (const workshopKey in this.workshops) {
            document.write(workshops[workshopKey])
        }
    }
}

class Student {
    // constructor({ firstName, surname, classNum }) {
    //   this.firstName = firstName
    //   this.surname = surname
    //   this.classNum = classNum
    // }
    constructor(initData) {
        Object.assign(this, initData)
    }

    toString() {
        return `${this.firstName} ${this.surname} - ${this.classNum}`
    }
}

let studentsList = [
    new Student({ firstName: 'Petro', surname: 'Ivanchenko', classNum: 9}),
    new Student({ firstName: 'Ivan', surname: 'Burko', classNum: 4}),
    new Student({ firstName: 'Olena', surname: 'Pulko', classNum: 7}),
    new Student({ firstName: 'Aleks', surname: 'Luschenko', classNum: 8}),
    new Student({ firstName: 'Roman', surname: 'Romanko', classNum: 8}),
]

let workshops = {
    math: new Workshop({ title: 'Math', workingDay: 3}),
    history: new Workshop({ title: 'History', workingDay: 2}),
    geography: new Workshop({ title: 'Geography', workingDay: 1}),
}

let workshopManager = new WorkshopManager(studentsList, workshops)
workshopManager.addStudentsToWorkshop()
workshopManager.printData()

workshopManager.workshops['math'].removeStudent(studentsList[0])
workshopManager.printData()
