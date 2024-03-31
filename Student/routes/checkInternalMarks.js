const express = require('express')
const router=express.Router()

const checkInternalMarks=require('../controllers/checkInternalMarks')

router.route('/checkInternalMarks').get(checkInternalMarks)

module.exports =router