//引入Node提供的http核心模块
const http=require('http');
//创建http服务器
const server=http.createServer();
//绑定请求事件
server.on('request',(req,res)=>{
    //配置字符编码格式
    res.writeHeader(200,{
        'Content-Type':'text/html;charset=utf-8'
    })
    //每当请求结束必须调用response的end()方法，不然客户端拿不到请求数据，会一直停留在请求状态
    // res.end('请求的类型：'+req.method+'请求的URL地址是：'+req.url);
    const url=req.url;
    if(url==='/index.html'){
        res.end('<h3>首页</h3>');
    }else if(url==='/movie.html'){
        res.end('<h3>电影</h3>');
    }else if(url==='/about.html'){
        res.end('<h3>关于</h3>');
    }else{
        res.end('<h3>404页面丢失</h3>');
    }
})
//启动服务器，第一个参数端口号(必须)，第二个参数不写默认127.0.0.1(可选)，function回调函数(可选)
server.listen(3000,()=>{
    console.log('httpServer runing on http://127.0.0.1:3000');
});