//animation
//<![CDATA[
$(function(){
            function onScrollInit( items, trigger ) {
                items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.attr('data-os-animation'),
                    osAnimationDelay = osElement.attr('data-os-animation-delay');
                  
                    osElement.css({
                        '-webkit-animation-delay':  osAnimationDelay,
                        '-moz-animation-delay':     osAnimationDelay,
                        'animation-delay':          osAnimationDelay
                    });
                    var osTrigger = ( trigger ) ? trigger : osElement;
                    
                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: false,
                            offset: '80%'
                    });
                });
            }
            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});//]]>  


//spinner

document.querySelector('.dnone').style.visibility='hidden';
        document.querySelector('.main').classList.add('spinner');
        setTimeout(() => {
        document.querySelector('.main').classList.remove('spinner');
        document.querySelector('.dnone').style.visibility="visible";
        }, 800);


//modal content

$('.img-fluid').click( function(){
            $('.modal-body').empty();
            $($(this).parents('div').html()).appendTo('.modal-body');
            $('#firstimage').modal({show:true});
        }
        )

//maps
  google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
               
                var mapStyles = [
		{ //hide all fills
			elementType: 'geometry.fill',
			stylers: [
				{ visibility: 'off' }
			]
		},{
			featureType: 'landscape.natural.landcover',
			elementType: 'geometry.fill',
			stylers: [
				{ visibility: 'on' },
			]
		},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#212121"
                  }
                ]
              },
	];
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 14,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(49.5746513, 20.343573), // New York
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles:mapStyles,
    // The following line is essential for making the map background transparent:
    backgroundColor: 'hsla(0, 0%, 0%, 0)', 
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(49.5746513, 20.343573),
                    map: map,
                    title: 'Tutaj jestem!'
                });
            }

//to the top button 
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#goup').fadeIn();
            } else {
                $('#goup').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#goup').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

});
