import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingJobComponent } from './setting-job.component';

describe('SettingJobComponent', () => {
  let component: SettingJobComponent;
  let fixture: ComponentFixture<SettingJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
