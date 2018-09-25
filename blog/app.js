//项目入口文件
const express=require('express');
const app=express();

const session=require('express-session');
app.use(session({
    secret:'gdukasgdutehs',//加密文本
    resave:false,//如果位true表示强制把session存储到物理磁盘上，从而保证session不会丢失，推荐false
    saveUninitialized:false//如果为true表示强制没有初始化的session保存到storage中，推荐false
}))
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
// const cors=require('cors');
// app.use(cors);
// const moment=require('moment');
// app.use(moment);

app.use('/node_modules',express.static('./node_modules'));
app.use('/assets',express.static('./assets'));
app.use('/views',express.static('./views'));

//配置模板引擎ejs,ejs模板引擎默认文件的后缀名是.ejs
app.set('view engine','ejs');
app.set('views','./views');

//导入路由模块
const router=require('./router.js');
app.use(router);


app.listen(3000,()=>{
    console.log('running at http://127.0.0.1:3000');
})