import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberJobstatusEditComponent } from './member-jobstatus-edit.component';

describe('MemberJobstatusEditComponent', () => {
  let component: MemberJobstatusEditComponent;
  let fixture: ComponentFixture<MemberJobstatusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberJobstatusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberJobstatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
