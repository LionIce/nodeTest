//项目入口文件
const express=require('express');
const app=express();
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