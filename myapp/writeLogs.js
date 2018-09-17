const path=require('path');
const fs=require('fs');
//记录日志中间件
function writeLogs(req,res,next){
    const infoStr=`${new Date().toLocaleString()} ${req.method} ${req.url}\n`;
    fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err)=>{
        if(err) return console.log('记录日志失败');
        console.log('记录日志成功');
        next();
    });
}

module.exports=writeLogs;