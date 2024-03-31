const express = require('express')
const router=express.Router()

const academicCalendar=require('../controllers/academicCalendar')

router.route('/academicCalendar').get(academicCalendar)

module.exports =router