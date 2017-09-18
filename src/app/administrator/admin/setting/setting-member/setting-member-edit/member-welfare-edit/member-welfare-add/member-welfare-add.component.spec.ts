import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberWelfareAddComponent } from './member-welfare-add.component';

describe('MemberWelfareAddComponent', () => {
  let component: MemberWelfareAddComponent;
  let fixture: ComponentFixture<MemberWelfareAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberWelfareAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberWelfareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
