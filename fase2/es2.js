var Student = require('./Student.js');

const bob = new Student("Bob", "Ross", "10/29/1942", "AAABBCCD");
console.log(bob.age());
console.log(bob.avg_grade());
const gabriele = new Student("Gabriele", "Rossi", "04/22/1997", "FFFFBBAAAF");
console.log(gabriele.age());
console.log(gabriele.avg_grade());