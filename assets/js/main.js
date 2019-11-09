
$("#lang .fa-chevron-down").css("display", "inline-block");

$("#account").click(aprichiudi);
$("#company").click(aprichiudi);
$("#product").click(aprichiudi);
$("#help").click(aprichiudi);
$("#lang").click(aprichiudi);

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
