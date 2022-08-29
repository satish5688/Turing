const express=require("express")
const router=express.Router()
const {all_attributes,attributes_id,attributes_value_id,attributes_product_id}=require('../Controller/attribute')

router.get('/attributes',all_attributes)

router.get('/attributes/:id',attributes_id)

router.get('/attributes_values/:id',attributes_value_id)

router.get('/attributes/inProduct/:id',attributes_product_id)

module.exports=router