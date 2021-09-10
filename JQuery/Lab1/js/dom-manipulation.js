$(function(){

    // 1- Append new div into container1 with class black
    $('.container1').append('<div class="black"><p>welcome append</p></div>');



    // 2- Add new Div with class 'white' as the first child of the section.
    $('.container1').prepend('<div class="white"><p>Welcome prepend</p></div>');


    // 3- Insert new <P> with class 'yellow' before <P> with class 'pink'.
    $('.pink').before('<p class="yellow">Welcome yellow</p>');


    // 4- Replace every P of the section with anchor with the same textContent and give it a href attribute ["http://"+textContent].
    $('.container2 > p').each(function (indexInArray, valueOfElement) { 
         $(valueOfElement).attr('href' , 'http://' + $(valueOfElement).text());
    });


    // 5- wrap the image with figure element.
    $('.container3>img').wrap("<div>").after('<p>Coffe</p>');


    // 6- Empty all <td> with class 'col-age'.
    // $('.container4 td').empty();

    // 7- Add Class 'man' to the td which contains 'mohsen'.
    $('.container4 td:contains("man")').addClass('man');

    
    // 8- Remove class 'your-email' from all <td> which has it and add it to all <td> which has not.(Bounes)
    $('.container4 td').each(function(index , value){
        ($(value).hasClass('your-email'))? $(value).removeClass('your-email') : $(value).addClass('your-email');
    });


    // 9- Filter The <li> and return only that has index that can be divided by 3.
    $('.container5 li').filter(function(index , value){
        if($(value).index() % 3 == 0) console.log($(value).text());
    });


    // 10- Change the value of input which named "username" to <yourname>
    $('.container6 input:text[name="username"]').val('Ibrahim Ali :)');


    // 11- Make the checkbox in the form with id 'my-form' checked.
    $('#my-form input:checkbox').prop('checked' , true);


})// End of load event