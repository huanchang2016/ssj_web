import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoeseMenuComponent } from './choese-menu.component';

describe('ChoeseMenuComponent', () => {
  let component: ChoeseMenuComponent;
  let fixture: ComponentFixture<ChoeseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoeseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoeseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
