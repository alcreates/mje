import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
   

   }

  ngOnInit() {
    const element = document.getElementById('scrollId');
    console.log(element);
    element.scrollIntoView();
  }

}
