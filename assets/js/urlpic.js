$(document).ready(function(){
	// Each - Image To Fetch
	$('img[data-url]').each(function() {
		// Define Img
	    	var self = $(this);
	    	var url = $(this).data('url');
	    	
	    	// Set Onclick
	    	$(this).parent().parent().click(function(){ window.open(url); });
	    	
	    	// LocalStorage
		if(typeof(Storage) !== "undefined" && localAccess === true) {
			// Cached
			if (localStorage[url]) {
				$(self).css("opacity", 0).attr("src", 'data:image/jpeg;base64,' + localStorage[url]).animate({opacity: 1});
			// Not Cached
			} else {    	
			        $.ajax({
			        	url: 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url=' + $(this).data('url') + '&screenshot=true',
			        	context: this,
			        	type: 'GET',
			        	dataType: 'json',
			        	success: function(data) {
			           		data = data.screenshot.data.replace(/_/g, '/').replace(/-/g, '+');
						$(this).css("opacity", 0).attr("src", 'data:image/jpeg;base64,' + data).animate({opacity: 1});
						localStorage[url] = data;
					}
			        });			        						
			}
		// No LocalStorage
		} else {
			console.log("Local Storage Error");   	
		    	// Load Screenshot
		        $.ajax({
		        	url: 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url=' + $(this).data('url') + '&screenshot=true',
		        	context: this,
		        	type: 'GET',
		        	dataType: 'json',
		        	success: function(data) {
		           		data = data.screenshot.data.replace(/_/g, '/').replace(/-/g, '+');
					$(this).css("opacity", 0).attr("src", 'data:image/jpeg;base64,' + data).animate({opacity: 1});
				}
		        });
		}
	});
});

var localAccess = localEnabled();
function localEnabled(){
	var test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}