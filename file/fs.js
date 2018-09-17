const fs=require('fs');

fs.readFile('./1.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
fs.writeFile('./1.txt','./2.txt',(err,data)=>{
    if(err) throw err;
    console.log('写入成功');
})