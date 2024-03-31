const express = require('express')
const router=express.Router()

const notifications=require('../controllers/notifications')

router.route('/notifications').get(notifications)

module.exports =router