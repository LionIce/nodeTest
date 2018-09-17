const express=require('express');
const app=express();

// const parseForm=require('./parseForm.js');
// app.use(parseForm);
const writeLogs=require('./writeLogs.js');
app.use(writeLogs);

//1.运行npm i body-parser -S安装解析 表单数据的body-parser中间件
//2.导入中间件
const bodyParser=require('body-parser');
//3.注册中间件
app.use(bodyParser.urlencoded({extended:false}));

//导入路由模块
const router=require('./router.js');
app.use(router);

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})