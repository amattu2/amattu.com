$(document).ready(function () {
  // Profile Picture
  $("#profile-picture").attr("src", "https://api.placeholder.app/image/150x150");

  // Animate slide-in
  $(window).scroll(function () {
    $(".animate-h").each(function (index) {
      // Add Slide
      if (
        $(this).offset().top < $(window).scrollTop() + 500 &&
        !$(this).hasClass("animated")
      ) {
        $(this).removeClass("animate-h");
        $(this).css({
          visibility: "visible",
          opacity: "1",
          position: "absolute",
        });
        $(this)
          .delay(100 * index)
          .css({ left: "2000px" })
          .animate({ left: "0px" }, "index * 100");
        $(this).addClass("animated");
        $(this).css({ position: "relative" });
      }
    });

    $(".chart .data .line").each(function (index) {
      // Animate Slide
      if (
        $(this).offset().top < $(window).scrollTop() + 500 &&
        !$(this).hasClass("animated")
      ) {
        var data_width = $(this).parent().width() / 100;
        var progress = $(this).data("progress") * data_width + "px";
        $(this)
          .delay(250 * index)
          .animate(
            { width: progress },
            {
              easing: "swing",
              duration: 250 * data_width,
              complete: function () {
                $(this)
                  .children("#current-progress")
                  .html($(this).data("progress") + "%");
              },
            }
          );
        $(this).addClass("animated");
      }
    });
  });

  var text_one = "Welcome to my portfolio..";
  var text_two = "I'm a.. Web Designer";
  var text_three = "I'm a.. Backend Developer";

  // Animate Typing
  $(function () {
    $(window).scroll();
    $("#welcome").typed({
      strings: [text_one, text_two, text_three],
      typeSpeed: 0,
      contentType: "html",
      showCursor: "false",
      backDelay: "1100",
    });
  });
});
