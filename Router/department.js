const express=require('express')
const router=express.Router()

const {get_all_department,get_department_by_id}=require('../Controller/department')


router.get('/department',get_all_department)


router.get('/department/:id',get_department_by_id)



module.exports=router