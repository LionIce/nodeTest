//表单解析
const querystring=require('querystring');
function parseForm(req,res,next){
    let dataStr='';
    req.on('data',(chunk)=>{
        dataStr+=chunk;
    })
    req.on('end',()=>{
        const result=querystring.parse(dataStr);
        req.body=result;
        next();
    })
}

module.exports=parseForm;