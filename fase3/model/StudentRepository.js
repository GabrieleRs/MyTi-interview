const Student = require("./Student");

module.exports = {
    students: [],
    saveStudent(student) {
        this.students.push(student);
        return this;
    },
    getStudents(){
        return this.students;
    }
}