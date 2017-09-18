import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSalaryAddComponent } from './member-salary-add.component';

describe('MemberSalaryAddComponent', () => {
  let component: MemberSalaryAddComponent;
  let fixture: ComponentFixture<MemberSalaryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSalaryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSalaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
