import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMiddleComponent } from './head-middle.component';

describe('HeadMiddleComponent', () => {
  let component: HeadMiddleComponent;
  let fixture: ComponentFixture<HeadMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
