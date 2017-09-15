import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingIndustryComponent } from './setting-industry.component';

describe('SettingIndustryComponent', () => {
  let component: SettingIndustryComponent;
  let fixture: ComponentFixture<SettingIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
