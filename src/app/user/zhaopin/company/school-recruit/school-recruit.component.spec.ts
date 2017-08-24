import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRecruitComponent } from './school-recruit.component';

describe('SchoolRecruitComponent', () => {
  let component: SchoolRecruitComponent;
  let fixture: ComponentFixture<SchoolRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
