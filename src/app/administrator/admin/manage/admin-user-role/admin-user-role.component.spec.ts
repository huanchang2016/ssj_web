import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRoleComponent } from './admin-user-role.component';

describe('AdminUserRoleComponent', () => {
  let component: AdminUserRoleComponent;
  let fixture: ComponentFixture<AdminUserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
