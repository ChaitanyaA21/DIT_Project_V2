
const express = require('express')
const router=express.Router()

const downloadSoftCopies=require('../controllers/downloadSoftCopies')

router.route('/downloadSoftCopies').get(downloadSoftCopies)

module.exports =router