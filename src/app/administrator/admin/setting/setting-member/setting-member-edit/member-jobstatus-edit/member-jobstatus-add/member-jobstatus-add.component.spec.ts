import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberJobstatusAddComponent } from './member-jobstatus-add.component';

describe('MemberJobstatusAddComponent', () => {
  let component: MemberJobstatusAddComponent;
  let fixture: ComponentFixture<MemberJobstatusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberJobstatusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberJobstatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
