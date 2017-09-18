import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberWelfareEditComponent } from './member-welfare-edit.component';

describe('MemberWelfareEditComponent', () => {
  let component: MemberWelfareEditComponent;
  let fixture: ComponentFixture<MemberWelfareEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberWelfareEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberWelfareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
