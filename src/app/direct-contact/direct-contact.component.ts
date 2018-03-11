import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-direct-contact',
  templateUrl: './direct-contact.component.html',
  styleUrls: ['./direct-contact.component.css']
})
export class DirectContactComponent implements OnInit {
  contactInfo;
  constructor(private http: Http) { 

    this.contactInfo = {
      email: '',
      subject: '',
      message: ''
};
  }

  ngOnInit() {
  }

  submit(){
   
    this.http.post('/contactme', this.contactInfo).subscribe(response => {
           this.contactInfo = {
             email: '',
             subject: '',
             message: ''
           };
     });
  }
   

}
