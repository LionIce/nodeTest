//路由模块
const express=require('express');
const router=express.Router();

const conn=require('./model.js');
// router.use(conn);
const cont=require('./controller.js')


router.get('/',cont.showIndexPage);
router.get('/register',cont.showRegPage);
router.get('/login',cont.showLoginPage);

//提交新用户进行注册
router.post('/register',cont.userReg);
//提交登录
router.post('/login',cont.userLogin)
//提交登出
router.get('/logout',cont.userLogout);

module.exports=router;