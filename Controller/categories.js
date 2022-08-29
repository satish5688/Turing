const knex = require('../config/DB_connection')


const get_all_categories = (req, res) => {
    console.log('helloo');
    knex("*").from('category').then((data) => {

        res.status(200).send({ "count": data.length, "row": data })
    }).catch((err) => {
        console.log(err);
    })
}



const category_by_id = (req, res) => {
    const category_id = req.params.id
    knex('category').where({ category_id }).then((data) => {
        if (data.length == 0) {
            res.send({ "status": 'error', "message": 'Indvalid id' })
        } else {
            res.send(data)
        }
    })

}


const catergory_product = (req, res) => {
    const category_id = req.params.id
    knex('category').where({ category_id }).then((data) => {
        console.log(data);
        delete data[0]['description']
        res.send(data)
    })

}

const categrory_department = (req, res) => {
    const department_id = req.params.id
    knex('category').where({ department_id }).then((data) => {
        if (data.length == 0) {
            res.send({ "status": 'error', "message": 'Indvalid id' })
        } else {
            res.send(data)
        }
    })
}
module.exports = { get_all_categories, category_by_id, catergory_product, categrory_department }