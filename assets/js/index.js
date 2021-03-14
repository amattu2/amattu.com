$(document).ready(function() {
  // Load Age
  var age = new Date().getFullYear()-1999;
  $('#age').text(age);


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

/*
- Display as cards, probably find the most popular ones? https://api.github.com/users/amattu2/repos

- display as google drive folders (2 line items) https://api.github.com/users/amattu2/gists
- When a repo was created less than 6mo ago, add a NEW badge like google did for the "Share" file on google drive in shared workspaces
*/
