$(document).ready(function() {
  // Load Age
  var age = new Date().getFullYear()-1999;
  $('#age').text(age);

  // Detect Position
  $(window).on('scroll', function() {
    $("[data-nav]").each(function(i) {
      var self = $(this);
      var data = $(this).data('nav');
      var link = $('a[href="'+data+'"]');
      var bottom = $(self).position().top + $(self).outerHeight(true);

      if ($('body').scrollTop() > $(self).position().top-80-$(".navbar").height() && $('body').scrollTop() < bottom) {
        $(link).addClass("special");
      } else {
        $(link).removeClass('special');
      }
    });
  });

  // On Hover Change Box Opacity [If: Not a mobile]
  if (!isMobile()) {
    $('.website').each(function() {
      $(this).hover(function() {
        $('.website').not($(this)).addClass('hover');
      }, function() {
        $('.website').not($(this)).removeClass('hover');
      });
    });
  }

  // Mobile Check
  function isMobile() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true;
    }
  }

  });

  // Bottobar
  $(".bottom").html("<p>&copy; Alec M. 2013-"+ new Date().getFullYear() +"</p>")
});
