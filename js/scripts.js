$(function(){
  var array = ["Cookie Dough","Chocolate","Caramel Swirl","Boom Chocolatta","Hazed &amp; Confused","Karamel Sutra", "Americone Dream", "Cherry Garcia"];

  for (var i = 0; i < array.length; i++){
    $(".iceCream").append("<li>"+array[i]+"</li>")
  }

});
