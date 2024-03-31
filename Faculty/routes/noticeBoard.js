const express = require('express')
const router = express.Router()

const noticeBoard=require('../controllers/noticeBoard')

router.route('/noticeBoard').get(noticeBoard)

module.exports=router 