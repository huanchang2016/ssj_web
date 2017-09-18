import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComstatusAddComponent } from './member-comstatus-add.component';

describe('MemberComstatusAddComponent', () => {
  let component: MemberComstatusAddComponent;
  let fixture: ComponentFixture<MemberComstatusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComstatusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComstatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
