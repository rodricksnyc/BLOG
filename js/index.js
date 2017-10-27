$( document ).ready(function() {
    console.log( "ready!" );

$(".readmore").click(readMore);
$(".readless").click(readLess);


function readMore(event) {
  event.preventDefault();
    $(".readmore").hide();
    $("#show-on-click1").slideDown(3000);
    $(".readless").show();
  }

  function readLess(event) {
    event.preventDefault();
    $(".readless").hide();
    $("#show-on-click1").slideUp(.00005);
    $(".readmore").show();
  }

 var scrollTop = $(".scrollTop");
 var scrollSpeed = 3000;
  $(scrollTop).click(function() {
   $('html, body').animate({
     scrollTop: 0
   }, scrollSpeed);

 });


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}


// var max = 20;
//
// var loadMore = function () {
//   for (var i = max-20; i < max; i++) {
//     $(".inner").append("<p>test "+i+"</p>");
//   }
//   max += 20;
// }

$('.on').scroll(function () {
  var top = $('.on').scrollTop();
  $('.two').html("top: "+top+" diff: "+($(".inner").height() - $(".on").height()));
  if (top >= $(".inner").height() - $(".on").height()) {
    $('.two').append(" bottom");
    // loadMore();
  }
});
});
// loadMore();
