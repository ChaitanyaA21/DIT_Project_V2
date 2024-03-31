
const express = require('express')
const router=express.Router()

const checkAttendance=require('../controllers/checkAttendance')

router.route('/checkAttendance').get(checkAttendance)

module.exports =router