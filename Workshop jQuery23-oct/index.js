$(document).ready(()=>{


    $('header').css({'border':"2px solid black",'background-color':"red","text-align": "center", "color": "black"});
    $('header').html(' <h4>Zomato</h4> ');
   
    $("section").height("90%");
    $("div").height("100%");

    $("div").width("60%");
    $('aside').css({'border':"1px solid black",
    float:"left","background-color":'cornflowerblue'});
    $("aside").height("100%");

    $("aside").width("20%");
    $('aside').html(" <nav> <ul><li><a href='#'>PLACES</a></li><li><a href='#'>Lounge</a></li><li><a href='#'>RESTAURANT</a></li><li><a href='#'>STALLS</a></li></ul></nav>");
    $('div').css({'border':"1px solid black",
    float:"left","background-color":'lightpink',"text-align": "center"});
    $("div").html("<h4>MENU</h4>");

   
    $("section").height("90%");
    $("section").css({'border':"2px solid black","background-color":'rgb(175, 207, 99)'});
    // $("section").html("Zomato provides best service to users in COVID-19 with all safety measures taken.");



    $('footer').css({'border':"2px solid black",
    float:"left",width:"100%","background-color":"limegreen"});
    $('footer').html('<marquee>ALL RIGHTS RESERVED FOR ZOMATO AND UBER</marquee>');
   
        

});