import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendResumeComponent } from './amend-resume.component';

describe('AmendResumeComponent', () => {
  let component: AmendResumeComponent;
  let fixture: ComponentFixture<AmendResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmendResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
