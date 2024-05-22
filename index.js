$("h1").css("color", "red");
$("h1").addClass("big-title");
//$("h1").removeClass("big-title");
$("h1").text("Bye");
$("button").html("<em>Nooo</em>");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

// $("button").click(function(){
//     $("h1").css("color","green");
// });

$(document).keypress(function (e) {
  $("h1").text(e.key);
});

$("h1").mouseover(function () {
  $("h1").css("color", "lightblue");
});

$("h1").before("<button>Before</button>");

// $("button").remove();

$("button").on("click", function () {
  $("h1").toggle();
});
