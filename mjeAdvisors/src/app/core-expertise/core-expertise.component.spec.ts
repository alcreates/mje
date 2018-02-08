import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreExpertiseComponent } from './core-expertise.component';

describe('CoreExpertiseComponent', () => {
  let component: CoreExpertiseComponent;
  let fixture: ComponentFixture<CoreExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
