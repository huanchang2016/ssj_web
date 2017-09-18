import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComstatusEditComponent } from './member-comstatus-edit.component';

describe('MemberComstatusEditComponent', () => {
  let component: MemberComstatusEditComponent;
  let fixture: ComponentFixture<MemberComstatusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComstatusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComstatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
