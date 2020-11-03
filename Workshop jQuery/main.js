$("document").ready(()=>{
   $("#b1").click(function(){
       $(".circleOrange").hide();
       $(".circleYellow").hide();
       $(".circleRed").show();
   })

   $("#b2").click(function(){
    $(".circleRed").hide();
    $(".circleOrange").hide();
    $(".circleYellow").show();

})

$("#b3").click(function(){
    $(".circleYellow").hide();
    $(".circleRed").hide();
    $(".circleOrange").show();

})

$("#b4").click(function(){
    $(".circleYellow").show();
    $(".circleRed").show();
    $(".circleOrange").show();

})
})