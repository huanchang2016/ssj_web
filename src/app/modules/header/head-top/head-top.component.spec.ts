import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTopComponent } from './head-top.component';

describe('HeadTopComponent', () => {
  let component: HeadTopComponent;
  let fixture: ComponentFixture<HeadTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
