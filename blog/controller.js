const conn=require('./model.js');



var showIndexPage=(req,res)=>{
    res.render('index.ejs',{
        isLogin:req.session.isLogin,
        user:req.session.user
    });
}
var showRegPage=(req,res)=>{
    res.render('./user/register.ejs',{});
}
var showLoginPage=(req,res)=>{
    res.render('./user/login.ejs',{});
}

var userReg=(req,res)=>{
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
}
var userLogin=(req,res)=>{
    conn.query('select * from users2 where username=? and password=?',[req.body.username,req.body.password],(err,results)=>{
        if(err) return res.json({err_code:1,message:'登陆错误，请稍后再试'});
        if(results.length!==1) return res.json({err_code:1,message:'登陆失败'});
        
        req.session.isLogin=true;
        req.session.user=results[0];
        console.log(req.session);

        res.json({err_code:0,message:'登陆成功'});
    })
}
var userLogout=(req,res)=>{
    req.session.destroy(function(err){
        res.redirect('/');
    })
}
module.exports={
    showIndexPage,
    showRegPage,
    showLoginPage,
    userReg,
    userLogin,
    userLogout
}