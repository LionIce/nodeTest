$(function(){
    const search=new URLSearchParams(location.search);
    // console.log(search);
    const id=search.get('id');
    // console.log(id);
    axios.get('http://127.0.0.1:5000/api/gethero?id='+id).then(function(results){
        console.log(results.data.message);
        if(results.status===200&&results.data.err_code===0){
            $('body').html(template('tmpl',results.data.message));
        }
    }).catch(function(err){
        console.log(err);
    })
})