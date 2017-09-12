import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZphComponent } from './zph.component';

describe('ZphComponent', () => {
  let component: ZphComponent;
  let fixture: ComponentFixture<ZphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
