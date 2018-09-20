$(function(){
    const search=new URLSearchParams(location.search);
    const id=search.get('id');
    axios.get('http://127.0.0.1:5000/api/gethero?id='+id).then(function(results){
        $('form').html(template('tmpl',results.data.message));
    })

    $('#form').on('submit',function(e){
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/postheros',$('#form').serialize()).then(function(resultT){
            if(resultT.status===200&&resultT.data.err_code===0){
                location.href='/';
                // console.log($('#form').serialize())
            }    
        }).catch(function(err){
            console.log(err);
        })
    })
})