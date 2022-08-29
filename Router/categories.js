const express=require('express')
const router=express.Router()

const {get_all_categories,category_by_id,catergory_product,categrory_department}=require('../Controller/categories')


router.get('/categories',get_all_categories)

router.get('/categories/:id',category_by_id)

router.get("/categories/inProduct/:id",catergory_product)

router.get('/categories/inDepartment/:id',categrory_department)






module.exports=router