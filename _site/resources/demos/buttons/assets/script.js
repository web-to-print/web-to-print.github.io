$(document).ready(function(){

$("#button-4, #button-25").css("background", "purple");

$("#button-0").click(function(){
  $("#button-4, #button-25").toggleClass("bounce");
});

});
