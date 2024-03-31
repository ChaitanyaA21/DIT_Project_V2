const express = require('express')
const router = express.Router()

const viewEnrolledStudents=require('../controllers/ViewEnrolledStudents')

router.route('/viewEnrolledStudents').get(viewEnrolledStudents)

module.exports=router 