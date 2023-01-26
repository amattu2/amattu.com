<?php
// Include Head
include('php/head.php');
?>
<html>
	<nav id="NAV_1">
		<!-- Brand Icon -->
		<a href="/" id="A_4"><img src="/" width="30" height="30" alt="" id="IMG_5"/><span id="SPAN_6">Company, LLC</span></a>
		<div id="nav_div">
			<!-- Links -->
			<ul id="nav_case">
				<li id="tab">
					<a href="#home">Home</a>
				</li>
				<li id="tab">
					<a href="#products">Hosting</a>
				</li>
				<li id="tab">
					<a href="#datacenters">Data</a>
				</li>
				<li id="tab">
					<a href="#design">Design</a>
				</li>
			</ul>
		</div>
	</nav>

	<body>
	<div id='slide-frame'>
		<div class='main' id='particles-js'>
			<div class='titles'>
				<h3 class='title'>Company, LLC</h3>
				<h4 class='sub-title'>Hosting & Design Services</h4>
			</div>
		</div>

		<div id='products' class='products theme-6'>
			<div class='theme-4 title'>
				<h1 style='font-weight: 300;'>Our Plans</h1>
			</div>

			<div class='product theme-2' data-plan='1-Core'>
				<div class='circle-bg theme-3'>
					<div class='circle'>

					</div>
				</div>
				<h3 class='core'>Intel I7</h3>
				<h5 class='core-details'>4.2GHz, x86, Single-Core</h5>

				<div class='purchase'>
					<h3>Purchase</h3>
					<div class='dedicated'>Dedicated</div>
					<div class='shared'>Shared</div>
				</div>
			</div>

			<div class='product theme-2' data-plan='2-Core'>
				<div class='circle-bg theme-3'>
					<div class='circle'>

					</div>
				</div>
				<h3 class='core'>Intel i7</h3>
				<h5 class='core-details'>4.2GHz, x86, Dual-Core</h5>

				<div class='purchase'>
					<h3>Purchase</h3>
					<div class='dedicated'>Dedicated</div>
					<div class='shared'>Shared</div>
				</div>
			</div>

			<div class='product theme-2' data-plan='4-Core'>
				<div class='circle-bg theme-3'>
					<div class='circle'>

					</div>
				</div>
				<h3 class='core'>Intel I7</h3>
				<h5 class='core-details'>4.2GHz, x86, Quad-Core</h5>
				<div class='purchase'>
					<h3>Purchase</h3>
					<div class='dedicated'>Dedicated</div>
					<div class='shared'>Shared</div>
				</div>
			</div>

			<div class='product theme-2' data-plan='4-Core'>
				<div class='circle-bg theme-3'>
					<div class='circle'>

					</div>
				</div>
				<h3 class='core'>Intel I7 Clocked</h3>
				<h5 class='core-details'>5.2GHz, x86, Quad-Core</h5>
				<div class='purchase'>
					<h3>Purchase</h3>
					<div class='dedicated'>Dedicated</div>
					<div class='shared'>Shared</div>
				</div>
			</div>
		</div>

		<div id='datacenters' class='locations theme-2'>
			<div class='theme-3 title'>
				<h1 style='font-weight: 300;'>Datacenters</h1>
			</div>
			<div id="map"></div>
		</div>

		<div class='design theme-2'>
			<div class='theme-1 title'>
				<h1 style='font-weight: 300; margin-bottom: 0;'>Design</h1>
				<h3 style='font-weight: 500; margin-top: 3px'>It&#39;&#115; the key.</h3>
			</div>

			<div class='designs'>
				<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" data-url="https://example.com" alt="/" />
				<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" data-url="https://example.com" alt="/" />
				<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" data-url="https://example.com" alt="/" />
			</div>
		</div>

		<script src='js/jquery-3.1.1.min.js'></script>
		<script src="js/url2img.js"></script>
		<script src='js/toastr.min.js'></script>
		<script src='js/index.js'></script>
		<script src='js/datacenters.js'></script>
		<script src='js/particles.min.js'></script>
		<script>
		particlesJS('particles-js',
		{
		  "particles": {
		    "number": {
		      "value": 80,
		      "density": {
		        "enable": false,
		        "value_area": 420
		      }
		    },
		    "color": {
		      "value": "#ff6c2c"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.5,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 40,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 150,
		      "color": "#ff6c2c",
		      "opacity": 0.5,
		      "width": 2
		    },
		    "move": {
		      "enable": true,
		      "speed": 2,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "window",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": false,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 85.2,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 0,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 20
		      }
		    }
		  },
		  "retina_detect": true
		});

		var map, markers;
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 4,
				minZoom: 4,
				center: {lat: 39.5333748, lng: -96.8224466},
				disableDefaultUI: true,
				mapTypeId: 'terrain',
				styles: [
					    {
				              featureType: 'water',
				              elementType: 'geometry',
				              stylers: [{color: '#F5F5F5'}]
				            },
				            {
				              featureType: 'water',
				              elementType: 'labels.text.fill',
				              stylers: [{color: '#F5F5F5'}]
				            },
				            {
				              featureType: 'water',
				              elementType: 'labels.text.stroke',
				              stylers: [{color: '#F5F5F5'}]
				            }
				          ]
			});

			var image = 'images/server.png';
			markers = locations.map(function(datacenter, i) {
				return marker = new google.maps.Marker({
					position: datacenter,
					icon: image,
					animation: google.maps.Animation.DROP,
					id: datacenter.id,
					name: datacenter.name,
					desc: datacenter.desc
				});
			});

			var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
		}
		</script>
		<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"></script>
	</div>
	</body>
</html>
