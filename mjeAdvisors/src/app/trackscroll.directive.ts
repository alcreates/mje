
import {EventEmitter, HostListener, Component, Directive, Output} from '@angular/core'


@Directive({
  selector: '[appTrackscroll]'
})
export class TrackscrollDirective {

  @Output() pageYPositionChange:EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('TrackScrollDirective');
  }

  @HostListener('window:scroll', ['$event'])
  track(event:any) {
   
    this.pageYPositionChange.emit(document.documentElement.scrollTop);
  }
}
