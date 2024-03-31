const express = require('express')
const router = express.Router()

const addInternalMarks=require('../controllers/addInternalMarks')

router.route('/addInternalMarks').post(addInternalMarks)

module.exports=router 