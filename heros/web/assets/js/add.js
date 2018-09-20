$(function(){
    $('#form').on('submit',function(e){
        e.preventDefault();
        const name=$('input[name=name]').val();
        const age=$('input[name=age]').val();
        const gender=$('input[name=gender]:checked').val();
        console.log(name+","+gender);
        axios.post('http://127.0.0.1:5000/api/addhero',{
            name,
            age,
            gender
        }).then(function(results){
            if(results.status===200&&results.data.err_code===0){
                location.href='/'
            }
        }).catch(function(err){
            console.log(err);
        })
    })
})