import { Component, OnInit } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { state, style,animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('fade', [
     transition('void => *', [
        style({opacity: 0}),
        animate(2000)

    ]),
    transition('* => void', [
      animate(2000, style({opacity: 0}))
    ])

    ])
  ]
})
export class NavBarComponent implements OnInit {
  pageY;
  hideNav = true;
  constructor() { }

  ngOnInit() {
  }

  onPageYChange(pageY:number) {
   
    this.pageY = pageY;
    if( pageY > 100){
      this.hideNav = false;
    }else{
      this.hideNav = true;
    }
  
  }

}
