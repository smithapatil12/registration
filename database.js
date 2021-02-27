
const {Pool,Client} = require('pg')

const client = new Client ({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"smitha",
    database:"demo"
})

client.connect()

client.query('select * from demo_table',(err,result)=>{
    if (!err){
        console.log(result.rows);
    }
    client.end()
})






















