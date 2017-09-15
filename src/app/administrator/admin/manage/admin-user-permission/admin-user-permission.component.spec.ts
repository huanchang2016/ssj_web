import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserPermissionComponent } from './admin-user-permission.component';

describe('AdminUserPermissionComponent', () => {
  let component: AdminUserPermissionComponent;
  let fixture: ComponentFixture<AdminUserPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
