//创建连接查数据
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});

connection.connect();

const p2={
    id:4,
    username:'小黑',
    age:20,
    gender:'女'
}
const sqlStr='update users set ? where id=?'
connection.query(sqlStr,[p2,p2.id],(error, results, fields)=> {
  if (error) throw error;
  console.log(results);
});

connection.end();