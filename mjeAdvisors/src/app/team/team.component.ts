import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openDialog(member){
    this.dialog.open(BioComponent, { data: {name: "Barry"}, height:"400px" , width:"400px"});
  }

}
