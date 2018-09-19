const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'mydb'
});
connection.connect();

//插入的数据
const p1={
    username:'钱多多2',
    age:21,
    gender:'男'
}
// const sqlStr='insert into users(username,age,gender) values("'+p1.username+'",'+p1.age+',"'+p1.gender+'")';
// connection.query(sqlStr,(err,results)=>{
//     if(err) return console.log(err);

//     console.log(results);
// })


//下面的sql语句仅限于在node中的mysql中使用，php不能这么写
const sqlStr='insert into users set ?'//?表示占位符，将来需要用具体的参数来填充这个问号
connection.query(sqlStr,p1,(error,results)=>{
    if(error) throw error;
    console.log(results);
})