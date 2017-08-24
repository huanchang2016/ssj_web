import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBlockComponent } from './model-block.component';

describe('ModelBlockComponent', () => {
  let component: ModelBlockComponent;
  let fixture: ComponentFixture<ModelBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
