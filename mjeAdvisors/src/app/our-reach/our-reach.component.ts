import { Component, OnInit } from '@angular/core';

import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-our-reach',
  templateUrl: './our-reach.component.html',
  styleUrls: ['./our-reach.component.css']
})
export class OurReachComponent implements AfterViewInit {
  
  private icon = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

  private chart: AmChart;
 
  constructor( private AmCharts: AmChartsService) { 
     

  }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("mapDiv", {
      /**
   * this tells amCharts it's a map
   */
    type : "map",
   theme : "dark",
  

  /**
   * create data provider object
   * map property is usually the same as the name of the map file.
   * getAreasFromMap indicates that amMap should read all the areas available
   * in the map data and treat them as they are included in your data provider.
   * in case you don't set it to true, all the areas except listed in data
   * provider will be treated as unlisted.
   */
  dataProvider : {
    "map": "usa2High",
    "zoomLevel": 1,
    "zoomLongitude": -96,
    "zoomLatitude": 38,
   
   
    "getAreasFromMap": true,

    "images": [ {
      "latitude": 40.3951,
      "longitude": -73.5619,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "Representative Searches:  this is the list information, this is the information",
      "label": "New York",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "Representative Searches: "
    },
    {
      "latitude": 34.052235,
      "longitude": -118.243683,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Los Angeles",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 41.881832,
      "longitude":-87.623177,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Chicago",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 42.361145,
      "longitude":-71.057083,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Boston",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude":  43.661471,
      "longitude":-70.2553259,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Portland, ME",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude":  41.203323,
      "longitude":-77.194527,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Pennsylvania",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    
    {
      "latitude":  39.299236,
      "longitude":-76.609383,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Baltimore",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude":  37.926868,
      "longitude":-78.024902,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Virginia",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude":  43.038902,
      "longitude":-87.906471,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Milwaukee",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude":  40.367474,
      "longitude":-82.996216,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Ohio",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude":  47.608013,
      "longitude":-122.335167,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Seattle",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 37.773972,
      "longitude":-122.431297,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "San Francisco",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 30.267153,
      "longitude":-97.7430608,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Austin, TX",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 40.758701,
      "longitude":-111.876183,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Salt Lake City, UH",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 32.897480,
      "longitude":-97.040443,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Dallas",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 29.780472,
      "longitude":-95.386342,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Huston",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 35.040031,
      "longitude":-89.981873,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Memphis",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 39.742043,
      "longitude":-104.991531,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Denver",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    {
      "latitude": 33.753746,
      "longitude":-84.386330,
     // "type": "circle",
      "svgPath": this.icon,
      "color": "white",
      "labelColor": "white",
      "labelRollOverColor": "white",
      "scale": 0.5,
      "title": "New York this is a test --- You can put any content in here ---------",
      "label": "Atlanta",
      "labelShiftY": 2,
      // "zoomLevel": 0,
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
    },
    
  
  ],
  
    "areas": [
      {
      "id": "US-AK",
      "alpha": 0,
      "balloonText": "",
      "autoZoom": false,
      "outlineColor": "#467298",
      "rollOverOutlineColor": "#467298"
      },
      {
        "id": "US-HI",
        "alpha": 0,
        "balloonText": "",
        "autoZoom": false,
        "outlineColor": "#467298",
        "rollOverOutlineColor": "#467298"
        }
      
  ]
 },
 "areasSettings": {
  "color": "#385C7B",
  "selectedColor": "white",
  "rollOverOutlineColor": "white",
  "rollOverColor": "#385C7B"
},


      
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

 



 
}
