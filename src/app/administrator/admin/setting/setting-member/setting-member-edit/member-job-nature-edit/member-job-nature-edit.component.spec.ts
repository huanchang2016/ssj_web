import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberJobNatureEditComponent } from './member-job-nature-edit.component';

describe('MemberJobNatureEditComponent', () => {
  let component: MemberJobNatureEditComponent;
  let fixture: ComponentFixture<MemberJobNatureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberJobNatureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberJobNatureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
