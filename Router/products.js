const express=require('express')
const router=express.Router()

const productController=require('../Controller/products')

router.get('/products',productController.all_products)

router.get('/products_search',productController.search_products)

router.get('/products/:id',productController.product_by_id)

router.get('/products/inCategory/:id',productController.products_of_categories)

router.get('/proucts/inDepatment/:id',productController.product_on_department)

router.get('/products/:id/details',productController.product_details)

router.get('/products/:id/locations',productController.location_of_product)

module.exports = router