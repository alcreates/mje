import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMjeComponent } from './why-mje.component';

describe('WhyMjeComponent', () => {
  let component: WhyMjeComponent;
  let fixture: ComponentFixture<WhyMjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyMjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
