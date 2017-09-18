import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMarriageEditComponent } from './member-marriage-edit.component';

describe('MemberMarriageEditComponent', () => {
  let component: MemberMarriageEditComponent;
  let fixture: ComponentFixture<MemberMarriageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMarriageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMarriageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
