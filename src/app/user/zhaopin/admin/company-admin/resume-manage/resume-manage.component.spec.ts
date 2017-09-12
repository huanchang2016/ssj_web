import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeManageComponent } from './resume-manage.component';

describe('ResumeManageComponent', () => {
  let component: ResumeManageComponent;
  let fixture: ComponentFixture<ResumeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
