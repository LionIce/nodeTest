const express=require('express');
const app=express();
const axios=require('axios');
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
//托管静态文件
app.use('/node_modules',express.static('../node_modules'));
app.use(express.static('./views'));
app.use('/assets',express.static('./assets'))


app.listen(4000,()=>{
    console.log('running at http://127.0.0.1:4000');
})