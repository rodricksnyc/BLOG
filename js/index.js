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
  var scrollSpeed = 20000;
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);

  });

  $('.old').hide();
  $('.view').click(function() {
    $('.old').show();
  });

  $('.old1').hide();
  $('.view1').click(function() {
    $('.old1').show();
  });

  $('.old2').hide();
  $('.view2').click(function() {
    $('.old2').show();
  });

  $('.old3').hide();
  $('.view3').click(function() {
    $('.old3').show();
  });

  $('.old4').hide();
  $('.view4').click(function() {
    $('.old4').show();
  });

  $('.old5').hide();
  $('.view5').click(function() {
    $('.old5').show();
  });
  $('.old6').hide();
  $('.view6').click(function() {
    $('.old6').show();
  });
  $('.old7').hide();
  $('.view7').click(function() {
  $('.old7').show();
  });
  $('.old8').hide();
  $('.view8').click(function() {
  $('.old8').show();
  });
  $('.old9').hide();
  $('.view9').click(function() {
  $('.old9').show();
  });

  $('.old10').hide();
  $('.view10').click(function() {
  $('.old10').show();
  });

  $('.old11').hide();
  $('.view11').click(function() {
  $('.old11').show();
  });

  $('.old12').hide();
  $('.view12').click(function() {
  $('.old12').show();
  });


  $('.old13').hide();
  $('.view13').click(function() {
  $('.old13').show();
  });


  $('.old14').hide();
  $('.view14').click(function() {
  $('.old14').show();
  });


  $('.old15').hide();
  $('.view15').click(function() {
    $('.old15').show();
  });
  $('.old16').hide();
  $('.view16').click(function() {
    $('.old16').show();
  });


  $('.old17').hide();
  $('.view17').click(function() {
    $('.old17').show();
  });

  $('.old18').hide();
  $('.view18').click(function() {
    $('.old18').show();
  });

  $('.old19').hide();
  $('.view19').click(function() {
    $('.old19').show();
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
