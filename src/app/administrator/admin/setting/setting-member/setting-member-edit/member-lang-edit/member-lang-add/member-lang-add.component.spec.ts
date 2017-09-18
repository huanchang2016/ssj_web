import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLangAddComponent } from './member-lang-add.component';

describe('MemberLangAddComponent', () => {
  let component: MemberLangAddComponent;
  let fixture: ComponentFixture<MemberLangAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLangAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLangAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
