import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPwdManagerComponent } from './user-pwd-manager.component';

describe('UserPwdManagerComponent', () => {
  let component: UserPwdManagerComponent;
  let fixture: ComponentFixture<UserPwdManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPwdManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPwdManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
