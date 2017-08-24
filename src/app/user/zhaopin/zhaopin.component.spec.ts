import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhaopinComponent } from './zhaopin.component';

describe('ZhaopinComponent', () => {
  let component: ZhaopinComponent;
  let fixture: ComponentFixture<ZhaopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhaopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhaopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
