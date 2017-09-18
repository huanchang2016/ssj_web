import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingIndustryEditComponent } from './setting-industry-edit.component';

describe('SettingIndustryEditComponent', () => {
  let component: SettingIndustryEditComponent;
  let fixture: ComponentFixture<SettingIndustryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingIndustryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingIndustryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
