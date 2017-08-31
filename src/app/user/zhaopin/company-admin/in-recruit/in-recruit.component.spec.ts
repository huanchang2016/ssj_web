import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InRecruitComponent } from './in-recruit.component';

describe('InRecruitComponent', () => {
  let component: InRecruitComponent;
  let fixture: ComponentFixture<InRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
