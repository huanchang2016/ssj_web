import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSearchComponent } from './jobs-search.component';

describe('JobsSearchComponent', () => {
  let component: JobsSearchComponent;
  let fixture: ComponentFixture<JobsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
