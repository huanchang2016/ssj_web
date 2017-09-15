import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMemberComponent } from './setting-member.component';

describe('SettingMemberComponent', () => {
  let component: SettingMemberComponent;
  let fixture: ComponentFixture<SettingMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
