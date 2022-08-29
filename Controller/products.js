const knex = require("../config/DB_connection")

const all_products = (req, res) => {
    knex('*').from("product").then((data) => {
        const count = data.length
        res.send({ 'count': count, 'row': data })
    }).catch(res.send({
        "code": "USR_02",
        "message": "The field example is empty.",
        "field": "example",
        "status": "500"
    }))
}

const search_products = (req, res) => {
    const name = req.query.name
    knex('product').where({ name }).then((data) => {
        if (data.length == 0) {
            res.send({
                "code": "USR_02",
                "message": "The field example is empty.",
                "field": "example",
                "status": "500"
            })
        } else {
            res.send({ 'count': data.length, 'row': data })
        }
    })
}

const product_by_id = (req, res) => {
    const id = req.params.id
    knex('product').where({ product_id: id }).then((data) => {
        if (data.length == 0) {
            res.send({
                "code": "USR_02",
                "message": "The field example is empty.",
                "field": "example",
                "status": "500"
            })
        }
        else {
            res.send(data)
        }
    })
}


const products_of_categories = (req, res) => {
    const id = req.params.id
    knex('product').join('product_category').where({ category_id: id }).then((data) => {
        for (s of data) {
            delete s['image']
            delete s['image_2']
            delete s['display']
            delete s['category_id']
        }
        res.send(data)
    })
}


const product_on_department = (req, res) => {
    const id = req.params.id
    knex('product').join('department').where({ department_id: id }).then((data) => {
        if (data.length == 0) {
            res.send({
                "code": "USR_02",
                "message": "The field example is empty.",
                "field": "example",
                "status": "500"
            })
        } else {
            for (s of data) {
                delete s['image']
                delete s['image_2']
                delete s['display']
                delete s['department_id']
            }

            res.send({ 'count': data.length, 'row': data })
        }
    })
}


const product_details = (req, res) => {
    const id = req.params.id
    knex('product').where({ product_id: id }).then((data) => {
        if (data.lengthf = 0) {
            res.send({
                "code": "USR_02",
                "message": "The field example is empty.",
                "field": "example",
                "status": "500"
            })
        } else {
            res.send(data)
        }
    })
}


const location_of_product = (req, res) => {
    const id = req.params.id


    knex.select("category.category_id", "category.name as category_name", "department.department_id", "department.name as department_name")
        .from("product_category")
        .join("category", "category.category_id", "product_category.category_id")
        .join("department","department.department_id","category.department_id")
        .where("product_category.product_id",id)
        .then((data)=>{
            res.send({"count":data.length,"row":data})
        }).catch((err)=>{       
            res.send(err.message)
        })

}   

module.exports = { all_products, search_products, product_by_id, products_of_categories, product_on_department, product_details, location_of_product }