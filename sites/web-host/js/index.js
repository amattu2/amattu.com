$(document).ready(function(){
	// ** Toastr Config **
	toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "newestOnTop": true,
	  "progressBar": true,
	  "positionClass": "toast-top-right",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "6500",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
	
	// ----------------------------
	// ** Public Functions **
        // Cookies
        function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else var expires = "";               
		document.cookie = name + "=" + value + expires + "; path=/";
        }

        function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

        function eraseCookie(name) {
		createCookie(name, "", -1);
        }
        	
	$(window).scroll(function() {
		$(".animate-h").each(function(index){
			// Add Slide
			if ($(this).offset().top < $(window).scrollTop()+500 && !$(this).hasClass('animated')) {
				$(this).removeClass('animate-h');
				$(this).css({	
					visibility: 'visible',
					opacity: '1',
					position: 'absolute'
				});
				$(this).delay(100 * index).css({"left":"2000px"}).animate({"left":"0px"}, "index * 100");
				$(this).addClass('animated');
				$(this).css({position: 'relative'});
			}						
		});							
	});
	
	// ---------------------------------
	// ** Hosting **
	var purchase = {Plan: "0", Datacenter: "0", Username: "0"};
	
	// Continue Previous Session
	if (readCookie("purchase")) {
		toastr.options.onclick = function() { purchase = JSON.parse(readCookie("purchase")); loadScreen(); }
		toastr.warning('Click on me to continue where you left off', 'Wait! Save some time');
	}
	
	// Product Click
	$(".product").on('click', function(){
		// Set Plan, Notify
		purchase.Plan = $(this).data("plan");
		toastr.clear();
		toastr.info('You picked the ' + purchase.Plan + ' plan. Now pick a datacenter', 'Awesome!');
			
		// Scroll To Map
		$('html,body').animate({
			scrollTop: $("#map").offset().top-135.88
		});
		
		loadMap();					
	});
	
	// Datacenter Click
	function loadMap() {		
		// Move To User
		if ("geolocation" in navigator) {
			// Set Marker
			navigator.geolocation.getCurrentPosition(function(position){ 
				map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
				var marker = new google.maps.Marker({
					position: {lat: position.coords.latitude, lng: position.coords.longitude},
					map: map,
					title: 'Your Position'
				});				
			});			
		}
		
		// Add Listener
		$.each(markers, function(i, val) {
			markers[i].addListener('click', function() {
				// Clear Listeners
				google.maps.event.clearInstanceListeners(markers[i]);
				
				// Set Datacenter, Clear, Notify
				purchase.Datacenter = markers[i].id;
				toastr.clear();
				toastr.success("You've picked the " + markers[i].name + " datacenter. Let's create your account!", 'Astonishing!');
				
				// Load Screen
				loadScreen();					
			});		
		});		
	}
	
	// Animate Body, Save Cookie
	function loadScreen() {
		// Save Progress
		createCookie("purchase", JSON.stringify(purchase), 3);
		
		// Slide Body, Remove Body
		$("#slide-frame").delay(650).css({	
			visibility: 'visible',
			opacity: '1',
			position: 'relative'
		});
		$("#slide-frame").css({"right":"0px"}).animate({
			right: "2000px"}, {
			duration: "600",
			complete:  function() { $(this).remove(); loadForm(); }
		});		
	}
	
	// Load Form
	function loadForm() {
		// Animate Body
		$("body").css({
			"overflow": "hidden"
		});
  		
  		// Create Loading Screen
		$("body").append("<div id='load-frame'></div>");	
		
		$('#load-frame').css({	
			position: 'absolute'
		});
		$('#load-frame').css({"left":"2000px"}).animate({"left":"0px"}, "0");
		$('#load-frame').css({position: 'relative'});
	}	 	
});