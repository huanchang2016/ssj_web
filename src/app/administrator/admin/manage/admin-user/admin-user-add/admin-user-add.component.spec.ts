import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAddComponent } from './admin-user-add.component';

describe('AdminUserAddComponent', () => {
  let component: AdminUserAddComponent;
  let fixture: ComponentFixture<AdminUserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});