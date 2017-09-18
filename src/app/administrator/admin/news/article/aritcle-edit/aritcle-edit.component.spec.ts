import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AritcleEditComponent } from './aritcle-edit.component';

describe('AritcleEditComponent', () => {
  let component: AritcleEditComponent;
  let fixture: ComponentFixture<AritcleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AritcleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AritcleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
