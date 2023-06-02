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