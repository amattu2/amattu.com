$(document).ready(function() {
	$('#landing img').each(function() {
		$(this).click(function() {
			$('#landing img').each(function() {
				var offset = "-" + $(window).width()*1.5;
				var pos = $(this).data('position');
				if (pos === "left") {
					$(this).css({left: 0});
					$(this).css({position: "absolute"}).animate({left: offset});
				} else if (pos === "right") {
					$(this).css({right: 0});
					$(this).css({position: "absolute"}).animate({right: offset});
				}
			});
		});
	});

	// Add Box Shadow to Nav
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 10;

		if (y_scroll_pos > scroll_pos_test) {
			$('.navbar').css({"box-shadow": "0 3px 6px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.12)"});
		} else if (y_scroll_pos < scroll_pos_test) {
			$('.navbar').css({"box-shadow": "none"});
		}
	});

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

	// Modal Hourly Rate
	ra = $('#rate-hours');
	$(ra).bind('keyup mouseup', function () {
		// Change Cost
		$('#rate-cost').text($('#rate-hours').val() * 17);
		// Change Hr/Hrs
		if ($('#rate-hours').val() > 1) {
			$('#rate-hr').text('hrs');
		} else {
			$('#rate-hr').text('hr');
		}
	});

	// Bottobar
	$(".bottom").html("<p>&copy; Alec M. 2013-"+ new Date().getFullYear() +"</p>")
});

function round(x) {
	return Math.round(x);
}

function toggleNav() {
	var x = document.getElementById("navbar");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}
