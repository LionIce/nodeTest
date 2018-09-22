//数据库连接
const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'mydb'
})

module.exports=conn;