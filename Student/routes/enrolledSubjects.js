const express = require('express')
const router=express.Router()

const enrolledSubjects=require('../controllers/enrolledSubjects')

router.route('/enrolledSubjects').get(enrolledSubjects)

module.exports =router