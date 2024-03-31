const express = require('express')
const router = express.Router()

const updatePassword=require('../controllers/updatePassword')

router.route('/updatePassword').patch(updatePassword)

module.exports=router 