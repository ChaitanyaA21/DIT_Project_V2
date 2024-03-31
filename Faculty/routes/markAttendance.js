const express = require('express')
const router = express.Router()

const markAttendance=require('../controllers/markAttendance')

router.route('/markAttendance').post(markAttendance)

module.exports=router 