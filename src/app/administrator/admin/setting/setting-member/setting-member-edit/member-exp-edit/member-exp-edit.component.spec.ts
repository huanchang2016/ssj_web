import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberExpEditComponent } from './member-exp-edit.component';

describe('MemberExpEditComponent', () => {
  let component: MemberExpEditComponent;
  let fixture: ComponentFixture<MemberExpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberExpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberExpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
