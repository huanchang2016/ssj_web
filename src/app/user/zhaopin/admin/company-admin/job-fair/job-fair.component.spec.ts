import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFairComponent } from './job-fair.component';

describe('JobFairComponent', () => {
  let component: JobFairComponent;
  let fixture: ComponentFixture<JobFairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
