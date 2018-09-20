
$(function(){
    // $.ajax({
    //     url:'http://127.0.0.1:5000/api/getheros',
    //     type:'get',
    //     dataType:'json',
    //     success:function(data){
    //         // console.log(data.message);
    //         const htmlStr=template('tmpl',data);
    //         $('tbody').html(htmlStr);
    //     }
    // })
    axios.get('http://127.0.0.1:5000/api/getheros').then(function(results){
        if(results.status===200&&results.data.err_code===0){
            const htmlStr=template('tmpl',results.data);
            $('tbody').html(htmlStr);

            $('.check').click(function(){
                var params=$(this)[0].title;
                console.log(params);
                axios.get('http://127.0.0.1:5000/api/gethero?id='+params).then(function(resultsT){
                    console.log(resultsT);
                })
            })

            $('.del').on('click',function(){
                var params=$(this)[0].title;
                axios.get('http://127.0.0.1:5000/api/delhero?id='+params).then(function(resultsS){
                    location.href='/';
                });
            })
        }
    }).catch(function(err){
        console.log(err)
    });

    
    

    
})
