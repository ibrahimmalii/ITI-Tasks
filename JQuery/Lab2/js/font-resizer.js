$(function(){

    var fontSize = 20;
    $('#decrease').click(function(){
        if(fontSize > 10){
            $('.content').css('font-size' , fontSize--);
            $('.error').text('');
        }else{
            $('.error').text('sorry this is minimum value you can reach');
        }
    });

    $('#increase').click(function(){
        if(fontSize < 30){
            $('.content').css('font-size' , fontSize++);
            $('.error').text('');
        }else{
            $('.error').text('sorry this is maximum value you can reach');
        }
    })


})// End of load event 