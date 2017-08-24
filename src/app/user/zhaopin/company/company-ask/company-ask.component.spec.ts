import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAskComponent } from './company-ask.component';

describe('CompanyAskComponent', () => {
  let component: CompanyAskComponent;
  let fixture: ComponentFixture<CompanyAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
