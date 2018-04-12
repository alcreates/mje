import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-expertise',
  templateUrl: './core-expertise.component.html',
  styleUrls: ['./core-expertise.component.css']
})
export class CoreExpertiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  core(e) {

    console.log(e);

  }

}
