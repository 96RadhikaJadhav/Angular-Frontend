import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedRegistrationComponent } from './completed-registration.component';

describe('CompletedRegistrationComponent', () => {
  let component: CompletedRegistrationComponent;
  let fixture: ComponentFixture<CompletedRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
