
// menu pc

$("#lang .fa-chevron-down").css("display", "inline-block");

$("#account").click(aprichiudi);
$("#company").click(aprichiudi);
$("#product").click(aprichiudi);
$("#help").click(aprichiudi);
$("#lang").click(aprichiudi);

  //funzione gestione dropdown menu
function aprichiudi(){
  var pos = $(this);
  var posalt = $(".right > div")
  var container = $(".drop");
  if (pos.hasClass("active") || posalt.hasClass("active")) {
    posalt.children("ul").css("display", "none");
    posalt.removeClass("active");
    posalt.children("a").removeClass("active");
    pos.children("ul").addClass("drop");
    pos.addClass("active");
    pos.children("a").addClass("active");
    pos.children("ul").css("display", "flex");
  } else{
    pos.children("ul").addClass("drop");
    pos.addClass("active");
    pos.children("a").addClass("active");
    pos.children("ul").css("display", "flex");
  }
  if ($("#lang").hasClass("active")) {
    $("#lang .fa-chevron-down").css("display", "none");
    $("#lang .fa-chevron-up").css("display", "inline-block");
  } else{
    $("#lang .fa-chevron-down").css("display", "inline-block");
    $("#lang .fa-chevron-up").css("display", "none");
  }
}
  //funzione chiusura menu cliccando sul body (un punto qualsiasi)
$(document).mouseup(function (e) {
  var container = $(".drop");
  if(!container.is(e.target) && container.has(e.target).length === 0) {
    container.hide();
    $(".right > div.active").removeClass("active");
    $(".right > div a.active").removeClass("active");
  }
  if ($("#lang").hasClass("active")) {
    $("#lang .fa-chevron-down").css("display", "none");
    $("#lang .fa-chevron-up").css("display", "inline-block");
  } else{
    $("#lang .fa-chevron-down").css("display", "inline-block");
    $("#lang .fa-chevron-up").css("display", "none");
  }
});


// menumobile

  //funzione apertura menu
$(".nopc i").click(function (){
  if ($(".menumobile").hasClass("active")) {
    $(".menumobile").removeClass("active");
    $(".bg_white").css("display", "none");
    $(this).css("position", "absolute");
  } else{
    $(".menumobile").addClass("active");
    $(".bg_white").css("display", "block");
    $(this).css("position", "fixed");
  }
});

  // funzioe apertura menu product
$("#product2").click(function (){
  var pos = $(this);
  if ($("#product2").hasClass("active")) {
    pos.removeClass("active");
    pos.children("div").removeClass("active");
    pos.children("a").css("margin", "0");
    pos.children("a").removeClass("active");
    pos.children("i.fa-chevron-up").removeClass("active");
    pos.children("i.fa-chevron-down").addClass("active");
  } else{
    pos.addClass("active");
    pos.children("div").addClass("active");
    pos.children("a").css("margin", "0 0 360px 0")
    pos.children("a").addClass("active");
    pos.children("i.fa-chevron-down").removeClass("active");
    pos.children("i.fa-chevron-up").addClass("active");
  }
});

$("#resources2").click(mobmenu);
$("#company2").click(mobmenu);
$("#account2").click(mobmenu);
$("#lang2").click(mobmenu);


  // funzione apertura tutti gli altri sotto menu
function mobmenu(){
  var pos = $(this);
  if (pos.hasClass("active")) {
    pos.removeClass("active");
    pos.children("div").removeClass("active");
    pos.children("a").css("margin", "0");
    pos.children("a").removeClass("active");
    pos.children("i.fa-chevron-up").removeClass("active");
    pos.children("i.fa-chevron-down").addClass("active");
  } else{
    pos.addClass("active");
    pos.children("div").addClass("active");
    pos.children("a").css("margin", "0 0 105px 0")
    pos.children("a").addClass("active");
    pos.children("i.fa-chevron-down").removeClass("active");
    pos.children("i.fa-chevron-up").addClass("active");
  }
}

  //funzione spostamento bottone "get the app"
$(".menumobile .bg_white .flex").click(function (){
  if ($(this).hasClass("active")) {
    $(".buttonmobile").removeClass("positionab");
    $(".buttonmobile").addClass("positionat");
  } else {
    $(".buttonmobile").addClass("positionab");
    $(".buttonmobile").removeClass("positionat");
  }
});
