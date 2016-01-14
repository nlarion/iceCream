$(function(){
  var array = ["Cookie Dough","Chocolate","Caramel Swirl","Boom Chocolatta","Hazed &amp; Confused","Karamel Sutra", "Americone Dream", "Cherry Garcia"];

  array.forEach(function(flavor){
    $(".iceCream").append("<li>"+flavor+"</li>")
  });

  for (var i = 0; i < array.length +1; i++){
    $(".iceCream").append("<li>"+array[i]+"</li>")
  }

});
