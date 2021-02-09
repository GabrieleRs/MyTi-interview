
const grades = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0
}

class Student {
    constructor(firstname, lastname, birthdate, grades) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.grades = grades;
        this.birthdate = birthdate;
    }
    age() {
        var ageDifMs = Date.now() - new Date(this.birthdate).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    avg_grade() {
        if (this.grades.length === 0)
            return 0;
        const sum = Array.from(this.grades).reduce((acc, val) => acc + grades[val],0);
        const avg = Math.round(sum / this.grades.length);
        return Object.keys(grades).find(key => grades[key] === avg);
    }
}

module.exports = Student;