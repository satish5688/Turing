const knex=require('../config/DB_connection')


const get_all_department= (req,res)=>{
    knex('*').from('department').then((data)=>{
        console.log(data);
        res.send(data)
    })
}


const get_department_by_id=(req,res)=>{
    const department_id=req.params.id
    knex('department').where({department_id}).then((data)=>{
        console.log(data[0]);
        res.status(200).send(data[0])
    })
}






module.exports={get_all_department,get_department_by_id}