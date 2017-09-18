import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberArrivalEditComponent } from './member-arrival-edit.component';

describe('MemberArrivalEditComponent', () => {
  let component: MemberArrivalEditComponent;
  let fixture: ComponentFixture<MemberArrivalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberArrivalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberArrivalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
