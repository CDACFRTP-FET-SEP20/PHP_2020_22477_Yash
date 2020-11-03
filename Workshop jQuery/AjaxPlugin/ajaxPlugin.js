


$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    dataType: 'json',
    method: 'GET',
    data: { get_param: "value" },
    success: function (x) {
        console.log("data=>" + x);
        $.each(x, () => {

        });


        $('document').ready(function () {
            $('#table').DataTable({
                data: x,
                columns: [
                    { "data": "id" },
                    { "data": "name" },
                    { "data": "username" },
                    { "data": "email" },
                    { "data": "phone" },
                    { "data": "website" }
                ]
            })
        })
    },
    error:(e)=>{
        alert("Error"+e);
    }
});
