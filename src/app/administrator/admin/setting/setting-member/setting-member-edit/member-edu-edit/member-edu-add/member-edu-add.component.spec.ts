import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEduAddComponent } from './member-edu-add.component';

describe('MemberEduAddComponent', () => {
  let component: MemberEduAddComponent;
  let fixture: ComponentFixture<MemberEduAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEduAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEduAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
