import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberJobNatureAddComponent } from './member-job-nature-add.component';

describe('MemberJobNatureAddComponent', () => {
  let component: MemberJobNatureAddComponent;
  let fixture: ComponentFixture<MemberJobNatureAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberJobNatureAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberJobNatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
