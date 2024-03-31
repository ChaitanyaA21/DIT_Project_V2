const express = require('express')
const router=express.Router()

const {addCalendar,viewCalendar,updateCalendar}=require('../controllers/academicCalendar')

router.route('/addCalendar').post(addCalendar)
router.route('/viewCalendar').get(viewCalendar)
router.route('/updateCalendar').patch(updateCalendar)

module.exports =router