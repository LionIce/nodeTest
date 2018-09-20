//服务器端入口文件
const express=require('express');
const app=express();
//跨域模块
const cors=require('cors');
app.use(cors());
//时间处理模块
const moment=require('moment');
//解析表单的body-parser
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
//数据库模块
const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'mydb'
})
conn.connect();


//查询所有数据信息
app.get('/api/getheros',(req,res)=>{
    // res.send('ok');
    const sqlStr='select * from heros where isdel=0 order by id asc';
    conn.query(sqlStr,(err,results)=>{
        if(err) return res.json({err_code:1,message:'获取参数失败',affectedRows:0});
        res.json({err_code:0,message:results,affectedRows:0});
    })
})
//根据id更新信息
app.post('/api/postheros',bodyParser.json(),(req,res)=>{
    const sqlStr='update heros set ? where id=?';
    conn.query(sqlStr,[req.body,req.body.id],(err,results)=>{
        if(err) return res.json({err_code:1,message:'更新失败',affectedRows:0});
        if(results.affectedRows!==1) return res.json({err_code:1,message:'更新的目标不存在',affectedRows:0});
        res.json({err_code:0,message:results,affectedRows:1});
    })
})
//查询对应id信息
app.get('/api/gethero',(req,res)=>{
    const id=req.query.id;
    const sqlStr='select * from heros where id=?';
    conn.query(sqlStr,id,(err,results)=>{
        if(err) return res.json({err_code:1,message:'查询失败',affectedRows:0});
        if(results.length!==1) return res.json({err_code:1,message:'查询不存在',affectedRows:0});
        res.json({err_code:0,message:results[0],affectedRows:0});
    })
})
//根据id软删除信息
app.get('/api/delhero',(req,res)=>{
    const id=req.query.id;
    const sqlStr='update heros set isdel=1 where id=?';
    conn.query(sqlStr,id,(err,results)=>{
        if(err) return res.json({err_code:1,message:'删除失败',affectedRows:0});
        if(results.affectedRows!==1) return res.json({err_code:1,message:'删除不存在',affectedRows:0});
        res.json({err_code:0,message:'删除成功',affectedRows:1});
    })
})
//添加信息
app.post('/api/addhero',bodyParser.json(),(req,res)=>{
    const hero=req.body;
    console.log(hero);
    //补全英雄的创建时间
    hero.ctime=moment().format('YYYY-MM-DD HH:mm:ss');
    const sqlStr='insert into heros set ?';
    conn.query(sqlStr,hero,(err,results)=>{
        if(err) return res.json({err_code:1,message:'添加失败',affectedRows:0});
        if(results.affectedRows!==1) return res.json({err_code:1,message:'添加失败',affectedRows:0});
        res.json({err_code:0,message:'添加成功',affectedRows:1})
    })
})



app.listen(5000,()=>{
    console.log('running at http://127.0.0.1:5000')
})