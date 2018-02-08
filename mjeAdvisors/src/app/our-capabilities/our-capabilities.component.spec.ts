import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCapabilitiesComponent } from './our-capabilities.component';

describe('OurCapabilitiesComponent', () => {
  let component: OurCapabilitiesComponent;
  let fixture: ComponentFixture<OurCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
