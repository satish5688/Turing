const knex = require('../config/DB_connection')


const all_attributes = (req, res) => {
    knex('*').from('attribute').then((data) => {
        res.status(200).send({ "count": data.length, "row": data })
    }).catch((err) => {
        console.log(err);
    })
}


const attributes_id = (req, res) => {
    const attributes_id = req.params.id
    knex('attribute').where({ attributes_id }).then((data) => {
        if (data.length == 0) {
            res.send({ 'status': 'errot', 'message': 'Invalid id' })
        } else {
            res.send(data)
        }

    })
}


const attributes_value_id = (req, res) => {
    const attribute_value_id = req.params.id
    console.log(attribute_value_id);
    knex('attribute_value').where({ attribute_value_id }).then((data) => {
        if (data.length == 0) {
            res.send({ 'status': 'errot', 'message': 'Invalid id' })
        } else {
            console.log(data);
            delete data[0]["attribute_id"]

            res.send(data)
        }

    })
}



const attributes_product_id = (req, res) => {
    knex('attribute').join('attribute_value', { 'attribute.attribute_id': 'attribute_value.attribute_id' }).where('attribute.attribute_id', req.params.id).then((data) => {
        if (data.length == 0) {
            res.send({
                "code": "USR_02",
                "message": "The field example is empty.",
                "field": "example",
                "status": "500"
            })
        } else {
            for (s of data) {
                delete s['attribute_id']
            }
            res.send(data)
        }
    })

}




module.exports = { all_attributes, attributes_id, attributes_value_id, attributes_product_id }