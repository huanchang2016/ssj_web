import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLangEditComponent } from './member-lang-edit.component';

describe('MemberLangEditComponent', () => {
  let component: MemberLangEditComponent;
  let fixture: ComponentFixture<MemberLangEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLangEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLangEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
