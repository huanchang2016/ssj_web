import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberJobnumberAddComponent } from './member-jobnumber-add.component';

describe('MemberJobnumberAddComponent', () => {
  let component: MemberJobnumberAddComponent;
  let fixture: ComponentFixture<MemberJobnumberAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberJobnumberAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberJobnumberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
