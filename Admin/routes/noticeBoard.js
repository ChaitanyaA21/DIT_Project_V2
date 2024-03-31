const express = require('express')
const router=express.Router()

const {noticeBoard,addNotice,deleteNotice}=require("../controllers/noticeBoard")


router.route('/').get(noticeBoard)
router.route('/noticeBoard').get(noticeBoard)
router.route('/addNotice').post(addNotice)
router.route('/deleteNotice').delete(deleteNotice)

module.exports = router;