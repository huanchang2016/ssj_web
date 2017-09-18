import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberExpAddComponent } from './member-exp-add.component';

describe('MemberExpAddComponent', () => {
  let component: MemberExpAddComponent;
  let fixture: ComponentFixture<MemberExpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberExpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberExpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
