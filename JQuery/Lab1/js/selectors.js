$(function(){
    
    // 1- Make the Background of every DIV like its class name and the text color of paragraph like its class name. (Dynamically). [Hint: Use each()][Bonus].
    $('.container1 div').each((index , value)=>{
        $(value).css('background-color' , $(value).attr('class'))
    });


    // 2- Replace the text content of the anchors (HREF which contains word "google") with "Google".
    $('.container2 a').each((index , value)=>{
        let eachValue = $(value).attr('href');
        (eachValue.includes('google')) ? $(value).text('Google'):
        (eachValue.endsWith('org')) ? $(value).text('IEEE'):
        (eachValue.startsWith('https')) && $(value).text('Facebook');
        (eachValue.startsWith('http')) && $(value).append('<b> Official website</b>');
    });


    // 3- Find the image in the third figure and change it's src to 'img/orange.png' and the text content of its figcaption into "fig.3 - Orange Juice". 
    // $('.container3 figure>img').eq(2).attr('src' , 'img/orange.png').text('Orange');
    $('.container3 figure').eq(2).html('<img src="img/orange.png" width="100" height="100"><figcaption>Orange Juice</figcaption>')


    // 4- Find the td which has class "my-name" and change it's color to "blue".
    $('.container4 td').each((index , value)=>{
        ($(value).attr('class').includes('my-name')) && $(value).css('color' , 'blue');
        ($(value).index() % 2 != 0) && $(value).css('background-color' , 'pink');
    });

    $('.container4 tr:last td').eq(1).css('font-weight' , 'bold');

    // 5- Find the second list item of the unordered list and change it's font style to "italic".
    $('.container5 > ul > li').eq(1).css('font-style' , 'italic');

    $('.container5 ol > li').eq(1).next().css('color' , 'red');

})