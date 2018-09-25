$(function(){

    $('#form').on('submit',function(e){
        e.preventDefault();

        axios.post('/login',$('#form').serialize()).then(results=>{
            if(results.data.err_code===0){
                location.href='/';
            }else{
                alert(results.data.message);
            }
        }).catch(function(){
            alert('登录失败！');
        })
    })
    
})