$(function(){

    $('#form').on('submit',function(e){
        
        e.preventDefault();

        console.log("$('form').serialize()");
        axios.post('/register',$('#form').serialize()).then(results=>{
            // console.log(results.data.err_code);
            if(results.data.err_code===0){
                location.href='/login'
            }else{
                alert(results.data.message);
            }
        }).catch(function(){
            console.log('注册失败，请稍后再试')
        })
    })
    
})