import { Component, OnInit } from '@angular/core';

import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-our-reach',
  templateUrl: './our-reach.component.html',
  styleUrls: ['./our-reach.component.css']
})
export class OurReachComponent implements AfterViewInit {
  
  
  private chart: AmChart;
 
  constructor( private AmCharts: AmChartsService) { 
     

  }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("mapDiv", {
      /**
   * this tells amCharts it's a map
   */
    type : "map",
    theme : "light",
  

  /**
   * create data provider object
   * map property is usually the same as the name of the map file.
   * getAreasFromMap indicates that amMap should read all the areas available
   * in the map data and treat them as they are included in your data provider.
   * in case you don't set it to true, all the areas except listed in data
   * provider will be treated as unlisted.
   */
  dataProvider : {
    "map": "usa2Low",
    "zoomLevel": 1.1,
    "zoomLongitude": -96,
    "zoomLatitude": 38,
   
   
    "getAreasFromMap": true,
    
    "areas": [
      {
      "id": "US-AK",
      "alpha": 0,
      "balloonText": "",
      "autoZoom": false
      },
      {
        "id": "US-HI",
        "alpha": 0,
        "balloonText": "",
        "autoZoom": false
        }
      
  ]
 },
 "areasSettings": {
  "color": "#385C7B",
  "selectedColor": "#CC0000",
  "rollOverOutlineColor": "white",
  "rollOverColor": "red"
}

      
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

 



 
}
