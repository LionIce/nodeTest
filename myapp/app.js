const express=require('express');
const path=require('path');
const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })
app.use(express.static('./views'));
app.use('/assets',express.static('./assets'))
// app.use('/myapp',express.static('./assets'))
// app.use(express.static('./views/1.html'))

// app.get('/1.html',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/1.html'));
// })
// app.get('/assets/css/1.css',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./assets/css/1.css'));
// })

app.listen(3000,function(){
    console.log('server running on http://127.0.0.1:3000');
})