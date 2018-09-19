//创建连接查数据
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});

connection.connect();

const sqlStr='select * from users'
connection.query(sqlStr,(error, results, fields)=> {
  if (error) throw error;
  console.log(results);
});

connection.end();