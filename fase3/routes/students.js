var express = require('express');
var Student = require('../model/Student')
const studentRepository = require('../model/StudentRepository')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(studentRepository.getStudents());
});

router.post('/', function (req, res, next) {
  const { firstname, lastname, birthdate, grades } = req.body;
  const student = new Student(firstname, lastname, birthdate, grades);
  studentRepository.saveStudent(student);
  res.statusCode = 201;
  res.send(student);
});

module.exports = router;
