import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurReachComponent } from './our-reach.component';

describe('OurReachComponent', () => {
  let component: OurReachComponent;
  let fixture: ComponentFixture<OurReachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurReachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
