import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSexAddComponent } from './member-sex-add.component';

describe('MemberSexAddComponent', () => {
  let component: MemberSexAddComponent;
  let fixture: ComponentFixture<MemberSexAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSexAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
