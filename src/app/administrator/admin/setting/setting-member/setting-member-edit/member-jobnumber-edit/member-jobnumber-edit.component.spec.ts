import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberJobnumberEditComponent } from './member-jobnumber-edit.component';

describe('MemberJobnumberEditComponent', () => {
  let component: MemberJobnumberEditComponent;
  let fixture: ComponentFixture<MemberJobnumberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberJobnumberEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberJobnumberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
