//创建连接查数据
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});

connection.connect();

// const sqlStr='delete from users where id=?'
// connection.query(sqlStr,9,(error, results, fields)=> {
//   if (error) throw error;
//   console.log(results);
// });

//删除操作一般用字段表示，不直接使用delete
const sqlStr='update users set isdel=1 where id=5';
connection.query(sqlStr,(error,results)=>{
    if(error) throw error;
    console.log(results);
})

connection.end();