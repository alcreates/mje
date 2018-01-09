import { Component, OnInit } from '@angular/core';

import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";


@Component({
  selector: 'app-our-reach',
  templateUrl: './our-reach.component.html',
  styleUrls: ['./our-reach.component.css']
})
export class OurReachComponent {
  
  public options = {
    "type": "map",
    "theme": "light",
    "areasSettings": {
      "autoZoom": true,
      "selectedColor": "#CC0000"
    },
    "dataProvider": {
      "map": "worldLow",
      "getAreasFromMap": true
    }
  
  };

 
  constructor() { 
     

  }

 



 
}
