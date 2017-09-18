import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSalaryEditComponent } from './member-salary-edit.component';

describe('MemberSalaryEditComponent', () => {
  let component: MemberSalaryEditComponent;
  let fixture: ComponentFixture<MemberSalaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSalaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSalaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
