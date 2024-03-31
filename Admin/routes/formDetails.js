const express = require('express')
const router=express.Router()

const {addForm,viewForms,updateForm,deleteForm}=require('../controllers/formDetails')

router.route('/addForm').post(addForm)
router.route('/viewForms').get(viewForms)
router.route('/updateForm').patch(updateForm)
router.route('/deleteForm').delete(deleteForm)

module.exports = router
