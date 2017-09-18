import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAreaEditComponent } from './setting-area-edit.component';

describe('SettingAreaEditComponent', () => {
  let component: SettingAreaEditComponent;
  let fixture: ComponentFixture<SettingAreaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingAreaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingAreaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
