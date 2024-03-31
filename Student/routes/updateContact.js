const express = require('express')
const router = express.Router()

const updateContact=require('../controllers/updateContact')

router.route('/updateContact').patch(updateContact)

module.exports=router 