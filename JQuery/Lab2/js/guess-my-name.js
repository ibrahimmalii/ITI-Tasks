$(function(){
    
    $('#my-name').val = $('.result').text();
    var counter = 0;

    var ibrahimChars = ["i" , "b" , "r" , "a" , "h" , "m"];
    $('#my-name').keydown(function (e) { 
        counter ++;
        $('.counter').text(counter);

        //================== Check if key valid ===================//
        ibrahimChars.forEach((value , index)=>{
            if(value == e.key){
                $('.result').append(value);
                $('#my-name').val($('.result').text())
            };

            e.preventDefault();
        });

    });

})// End of load event


