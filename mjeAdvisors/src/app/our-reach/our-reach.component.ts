import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-reach',
  templateUrl: './our-reach.component.html',
  styleUrls: ['./our-reach.component.css']
})
export class OurReachComponent {
  
  latitude = 38.0000;
  longitude: number = -97.0000;	
  zoom = 4;
  center = {latitude: 45, longitude: -73  };
  zoomControl = true;
  mapDraggable = true;
  scrollwheel = false;
  
  longNyc;
  latNyc;
  latLa;
  longLa;
  locations = [
    {
      name : 'companyone',
      lat: 40.785091,
      long: -73.968285
    },
    {
      name: 'companytwo',
      lat: 34.052235,
      long:  -118.243683
    }
  ];
 
  styles = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#193341"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c5a71"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#29768a"
            },
            {
                "lightness": -37
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#406d80"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#406d80"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#3e606f"
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.84
            }
        ]
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
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.6
            },
            {
                "color": "#1a3541"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c5a71"
            }
        ]
    }
]
  
 
  constructor() { 
    

  }

 
}
