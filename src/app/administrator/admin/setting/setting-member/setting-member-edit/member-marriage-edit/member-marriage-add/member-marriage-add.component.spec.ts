import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMarriageAddComponent } from './member-marriage-add.component';

describe('MemberMarriageAddComponent', () => {
  let component: MemberMarriageAddComponent;
  let fixture: ComponentFixture<MemberMarriageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMarriageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMarriageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
