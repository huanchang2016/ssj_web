import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdManagerComponent } from './pwd-manager.component';

describe('PwdManagerComponent', () => {
  let component: PwdManagerComponent;
  let fixture: ComponentFixture<PwdManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
