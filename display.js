$(document).ready(function(){
    $("button").click(function(){
      $("button").removeClass("active")
      $(this).addClass("active")
      $(".display").html($(this).html())
      $(".display").children("img").css({"width":"100%", "height":"100%", "cursor":"unset"})
    });
  });