import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSexEditComponent } from './member-sex-edit.component';

describe('MemberSexEditComponent', () => {
  let component: MemberSexEditComponent;
  let fixture: ComponentFixture<MemberSexEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSexEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSexEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
