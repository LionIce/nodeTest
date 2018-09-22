//路由模块
const express=require('express');
const router=express.Router();

const conn=require('./model.js');
// router.use(conn);


router.get('/',(req,res)=>{
    res.render('index.ejs',{});
});
router.get('/register',(req,res)=>{
    res.render('./user/register.ejs',{});
});
router.get('/login',(req,res)=>{
    res.render('./user/login.ejs',{});
});

//提交新用户进行注册
router.post('/register',(req,res)=>{
    console.log(req.body);
    if(req.body.username.length<=0||req.body.password.length<=0||req.body.nickname.length<=0){
        return res.json({err_code:1,message:'注册失败，检查输入信息'});
    }

    //检验用户名的占用情况
    conn.query('select count(*) as count from users2 where username=?',req.body.username,(err,results)=>{
        if(results[0].count!==0) return res.json({err_code:1,message:'注册失败，用户名已被占用'});
        if(results[0].count===0){
            conn.query('insert into users2 set ?',req.body,(err,results)=>{
                if(err) return res.json({err_code:1,message:'注册用户失败'});
                if(results.affectedRows!==1) return res.json({err_code:1,message:'注册用户失败'});
                res.json({err_code:0,message:'注册用户成功'});
            })
        }
    })
});

module.exports=router;