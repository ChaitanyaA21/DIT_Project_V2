
const express = require('express')
const router=express.Router()

const raiseComplaints=require('../controllers/raiseComplaints')

router.route('/raiseComplaints').post(raiseComplaints)

module.exports =router