$(function(){
  var array = ["Cookie Dough","Chocolate","Caramel Swirl","Boom Chocolatta","Hazed &amp; Confused","Karamel Sutra", "Americone Dream", "Cherry Garcia"];
  array.forEach(function(flavor){
    $(".iceCream").append("<li>"+flavor+"</li>")
  });

});
