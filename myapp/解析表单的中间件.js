const express=require('express');
const app=express();

const parseForm=require('./parseForm.js');
app.use(parseForm);
const writeLogs=require('./writeLogs.js');
app.use(writeLogs);

//导入路由模块
const router=require('./router.js');
app.use(router);


app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})

