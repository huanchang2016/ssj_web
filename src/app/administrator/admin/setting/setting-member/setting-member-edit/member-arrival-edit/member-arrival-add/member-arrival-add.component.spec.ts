import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberArrivalAddComponent } from './member-arrival-add.component';

describe('MemberArrivalAddComponent', () => {
  let component: MemberArrivalAddComponent;
  let fixture: ComponentFixture<MemberArrivalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberArrivalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberArrivalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
