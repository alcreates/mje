import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectContactComponent } from './direct-contact.component';

describe('DirectContactComponent', () => {
  let component: DirectContactComponent;
  let fixture: ComponentFixture<DirectContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
