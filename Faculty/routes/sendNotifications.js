
const express = require('express')
const router = express.Router()

const sendNotifications=require('../controllers/sendNotifications')

router.route('/sendNotifications').get(sendNotifications)

module.exports=router 