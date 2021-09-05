
document.getElementById('btn').addEventListener('click', () => {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: $('#form').serialize(),
        dataType: 'json',
        success: function (response) {
            console.log('from ajax call');
            console.log(response);
            // location.replace('http://127.0.0.1:5502/index.html');
        },
        error: function (error) {
            console.log(error);
        }

    });
    // End Of Ajax Call

})