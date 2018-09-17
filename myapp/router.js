const express=require('express');
const router=express.Router();
const querystring=require('querystring');

router.get('/index.html',(req,res)=>{
    res.send('首页');
})
router.get('/movie.html',(req,res)=>{
    res.send('电影');
})
router.post('/api/postinfo',(req,res)=>{
    console.log(req.body);
    res.send('你提交的数据是：'+JSON.stringify(req.body));
})


module.exports=router;