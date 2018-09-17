//导入express模块
const express=require('express');
const fs=require('fs');
const path=require('path');
//创建express服务器实例
const app=express();
//注册访问写入日志中间件
app.use(myMiddleWareWriteLogs);


app.get('/',(req,res)=>{
    // writeLog(req);
    res.send('ok');
})
app.post('/api/postinfo',(req,res)=>{
    // writeLog(req);
    res.send('ready');
})


app.listen(3000,()=>{
    console.log('http://127.0.0.1');
})

//写入日志的方法
// function writeLog(req){
//     const infoStr=`${new Date().toLocaleString()} ${req.method} ${req.url}\n`;
//     fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err)=>{
//         if(!err) console.log('写入OK');
//     })
// }
//定义写入日志的中间件
function myMiddleWareWriteLogs(req,res,next){
    const infoStr=`${new Date().toLocaleString()} ${req.method} ${req.url}\n`;
    fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err)=>{
        if(!err) console.log('写入OK');
        //当这个日志中间件把信息记录完毕之后，需要用next函数，让处理环节进入到下一个
        next();
    })
}

