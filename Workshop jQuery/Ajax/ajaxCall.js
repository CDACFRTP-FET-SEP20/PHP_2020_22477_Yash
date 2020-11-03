
$('document').ready(()=>{
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        success: function(data) {
            for (var i=0; i<data.length; i++) {
                var row = $('<tr><td>' + data[i].id+ '</td><td>' + data[i].name + '</td><td>' + data[i].username + '</td><td>'+data[i].email+'</td><td>'+data[i].phone+'</td><td>'+data[i].website+'</td></tr>');
                $('#table').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

})

