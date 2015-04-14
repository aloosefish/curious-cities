console.log('butt!!')
// var styles = 
// [
//     {
//         "featureType": "administrative",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#444444"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#f2f2f2"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "hue": "#ffb200"
//             },
//             {
//                 "saturation": "100"
//             },
//             {
//                 "lightness": "-21"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "weight": "2.67"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.attraction",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#ffb200"
//             },
//             {
//                 "weight": "4.86"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.attraction",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "hue": "#ff7900"
//             },
//             {
//                 "weight": "1.35"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.attraction",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "saturation": "0"
//             },
//             {
//                 "color": "#fbff00"
//             },
//             {
//                 "weight": "2.93"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 45
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#097faf"
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     }
// ]

// // var styles = [
// //     {
// //         "featureType": "administrative",
// //         "elementType": "labels.text.fill",
// //         "stylers": [
// //             {
// //                 "color": "#444444"
// //             }
// //         ]
// //     },
// //     {
// //         "featureType": "landscape",
// //         "elementType": "all",
// //         "stylers": [
// //             {
// //                 "color": "#f2f2f2"
// //             }
// //         ]
// //     },
// //     {
// //         "featureType": "poi",
// //         "elementType": "all",
// //         "stylers": [
// //             {
// //                 "visibility": "off"
// //             }
// //         ]
// //     },
// //     {
// //         "featureType": "road",
// //         "elementType": "all",
// //         "stylers": [
// //             {
// //                 "saturation": -100
// //             },
// //             {
// //                 "lightness": 45
// //             }
// //         ]
// //     },
// //     {
// //         "featureType": "road.highway",
// //         "elementType": "all",
// //         "stylers": [
// //             {
// //                 "visibility": "simplified"
// //             }
// //         ]
// //     },
// //     {
// //         "featureType": "road.arterial",
// //         "elementType": "labels.icon",
// //         "stylers": [
// //             {
// //                 "visibility": "off"
// //             }
// //         ]
// //     },
// //     {
// //         "featureType": "transit",
// //         "elementType": "all",
// //         "stylers": [
// //             {
// //                 "visibility": "off"
// //             }
// //         ]
// //     },
// //     {
// //         "featureType": "water",
// //         "elementType": "all",
// //         "stylers": [
// //             {
// //                 "color": "#46bcec"
// //             },
// //             {
// //                 "visibility": "on"
// //             }
// //         ]
// //     }
// // ];

// var myCenter=new google.maps.LatLng(45.5136190,-122.6520430);

// var myCenter2=new google.maps.LatLng(45.517555, -122.631819);

// function initialize() {
// 	var mapProp = {
// 		center:myCenter,
// 		zoom:14,
// 		styles: styles
// 	};

// 	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

// 	var marker=new google.maps.Marker({
// 		position:myCenter,
// 		icon:'jollyRog.png',
// 		info: contentString,
// 		labelClass: 'mapMarker',
// 		// size: new google.maps.Size(20, 32)
// 	});

// 	var marker2=new google.maps.Marker({
// 		position:myCenter2,
// 		icon:'fontina.png',
// 		info: contentString2,
// 		strokeColor: '#FF0000',
// 		strokeWeight: '10px'
// 		// size: new google.maps.Size(20, 32)
// 	});

// 	marker.setMap(map);
// 	marker2.setMap(map);

//   	var contentString = '<div id="content">'+
//     	'<div id="siteNotice">'+
//     	'</div>'+
//     	'<h1 id="firstHeading" class="firstHeading">12th and Madison!</h1>'+
//     	'<div id="bodyContent">'+
//     	'<p><b>Mural</b>, Blah blah blah, creepy mural next to the Jolly Roger</p>'+
//     	'<p>#mural #graffiti #art</p>'+
//     	'</div>'+
//     	'</div>';

//     var contentString2 = '<div id="content">'+
//     	'<div id="siteNotice">'+
//     	'</div>'+
//     	'<h1 id="firstHeading" class="firstHeading">33rd and Morrison</h1>'+
//     	'<div id="bodyContent">'+
//     	'<p><b>Mural</b>, Blah blah blah, cool mural next to the Jolly Roger</p>'+
//     	'<p>#mural #graffiti #art</p>'+
//     	'</div>'+
//     	'</div>';

//     var infowindow = new google.maps.InfoWindow({
//     	content: contentString
//   	});

//   	var infowindow2 = new google.maps.InfoWindow({
//     	content: contentString2
//   	});

// 	google.maps.event.addListener(marker, 'mouseover', function() {
//     	infowindow.open(map,marker);
//     });

// 	google.maps.event.addListener(marker, 'mouseout', function() {
//     	infowindow.close(map,marker);
// 	});


// 	google.maps.event.addListener(marker2, 'mouseover', function() {
//     	infowindow2.open(map,marker2);
//     });

// 	google.maps.event.addListener(marker2, 'mouseout', function() {
//     	infowindow2.close(map,marker2);
// 	});
// }

// google.maps.event.addDomListener(window, 'load', initialize);




google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
  var myIcon='https://mapbuildr.com/assets/img/markers/hollow-pin-black.png';
    var mapOptions = {
        center: new google.maps.LatLng(45.517534,-122.648507),
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true,
        scrollwheel: true,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: false,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [ 
        	{ "stylers": [ { "saturation": -100 } ] },
        	{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#0099dd" } ] },
        	{ "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
        	{ "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#aadd55" } ] },
        	{ "featureType": "road.highway", "elementType": "labels", "stylers": [ { "visibility": "on" } ] },
        	{ "featureType": "road.arterial", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] },
        	{ "featureType": "road.local", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] },{ } ],
    }
    var mapElement = document.getElementById('googleMap');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
		['Spot 1', 'This is spot 1. Blah blah. #this #that', 'undefined', 'undefined', 'undefined', 45.5136190, -122.6520430, 'img/fontina.png'],
		['Spot 2', 'This is spot 2. Beep boop. #beep #boop', 'undefined', 'undefined', 'undefined', 45.517555,  -122.631819, 'img/jollyRog.png']
    ];
    for (i = 0; i < locations.length; i++) {
		if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
		if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
		if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
       	if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
       	if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        marker = new google.maps.Marker({
            icon: locations[i][7],
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            // desc: description,
            // tel: telephone,
            // email: email,
            // web: web,
            id: 'markerLayer'
        });
      link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
      var myoverlay = new google.maps.OverlayView();
     	myoverlay.draw = function () {
        this.getPanes().markerLayer.id='markerLayer';
     };
     myoverlay.setMap(map);
 }
function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
  var infoWindowVisible = (function () {
          var currentlyVisible = false;
          return function (visible) {
              if (visible !== undefined) {
                  currentlyVisible = visible;
              }
              return currentlyVisible;
           };
       }());
       iw = new google.maps.InfoWindow({maxWidth: 100});
       google.maps.event.addListener(marker, 'click', function() {
           if (infoWindowVisible()) {
               iw.close();
               infoWindowVisible(false);
           } else {
               var html= "<div style='color:#000;background-color: white;padding:5px;' class='infoWindow'><h4>"+title+"</h4><p>"+desc+"<p></div>";
               iw = new google.maps.InfoWindow({content:html});
               iw.open(map,marker);
               infoWindowVisible(true);
           }
    });
    google.maps.event.addListener(iw, 'closeclick', function () {
        infoWindowVisible(false);
    });
}
}

console.log('butt')
