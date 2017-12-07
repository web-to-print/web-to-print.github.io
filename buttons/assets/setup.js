$(document).ready(function(){

  var buttons = 50;
    for (i = 0; i <= buttons; i++){
      $(".container").append(
        "<div class='item' id='button-"+i+"'></div>"
      );
      console.log(i+" happened");
    }

});
