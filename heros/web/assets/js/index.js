
$(function(){
    $.ajax({
        url:'http://127.0.0.1:5000/api/getheros',
        type:'get',
        dataType:'json',
        success:function(data){
            // console.log(data.message);
            const htmlStr=template('tmpl',data);
            $('tbody').html(htmlStr);
        }
    })
})
