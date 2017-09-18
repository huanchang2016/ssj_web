import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComscaleEditComponent } from './member-comscale-edit.component';

describe('MemberComscaleEditComponent', () => {
  let component: MemberComscaleEditComponent;
  let fixture: ComponentFixture<MemberComscaleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComscaleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComscaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
