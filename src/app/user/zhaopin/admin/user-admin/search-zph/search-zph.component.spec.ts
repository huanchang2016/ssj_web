import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchZphComponent } from './search-zph.component';

describe('SearchZphComponent', () => {
  let component: SearchZphComponent;
  let fixture: ComponentFixture<SearchZphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchZphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchZphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
