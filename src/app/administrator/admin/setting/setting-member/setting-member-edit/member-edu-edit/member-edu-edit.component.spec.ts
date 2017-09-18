import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEduEditComponent } from './member-edu-edit.component';

describe('MemberEduEditComponent', () => {
  let component: MemberEduEditComponent;
  let fixture: ComponentFixture<MemberEduEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEduEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEduEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
