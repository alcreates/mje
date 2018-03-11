import { DirectContactComponent } from './../direct-contact/direct-contact.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  latitude = 40.74881;
  longitude: number = -73.985428;	
  
  constructor(private http: Http, public dialog: MatDialog) {
    
}

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open( DirectContactComponent, { height:"400px" , width:"600px"});
  }
  onChoseLocation(e){
    console.log(e);
    this.latitude = e.coords.lat;
    this.longitude = e.coords.lng;
  }

}
