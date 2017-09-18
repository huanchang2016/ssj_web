import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingJobEditComponent } from './setting-job-edit.component';

describe('SettingJobEditComponent', () => {
  let component: SettingJobEditComponent;
  let fixture: ComponentFixture<SettingJobEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingJobEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingJobEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
