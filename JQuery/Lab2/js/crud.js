$(function(){

    var counter = 0;
    $('#add').click(function(){
        ($('#name').val() == 0 || $('#age').val() == 0)?
            alert('please insert your info and try again'):
            $('tbody').append('<tr id='+(counter++)+'><td>'+$("#name").val()+'</td><td>'+$("#age").val()+'</td><td><button class="delete">Delete</button></td></tr>');

        $('.delete').each((index , value)=>{
            console.log($('.delete'));
            $(value).click(()=>{
                (confirm('Do you want to delete??'))&&
                    $('tr').eq(index + 1).css('display' , 'none');
            });
        });
        
    });

    //======================= Handle search =================//
    $('#search-item').keyup(function (e) { 
        var searchValue = $(this).val();
        $('tbody tr').each(function(){
            var dataone = $(this).children("td:first").text();
            var datatwo = $(this).children("td:eq(1)").text();
            if(dataone.toLowerCase().indexOf(searchValue.toLowerCase()) != -1 || datatwo.toLowerCase().indexOf(searchValue.toLowerCase()) != -1){
                $(this).show(500);
            }else{
                $(this).hide(500);
            }
        })
    });




})// End of load event