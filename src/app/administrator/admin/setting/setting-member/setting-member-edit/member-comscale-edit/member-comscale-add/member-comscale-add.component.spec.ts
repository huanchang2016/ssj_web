import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComscaleAddComponent } from './member-comscale-add.component';

describe('MemberComscaleAddComponent', () => {
  let component: MemberComscaleAddComponent;
  let fixture: ComponentFixture<MemberComscaleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComscaleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComscaleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
