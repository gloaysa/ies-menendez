import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldSchoolPage } from './old-school.page';

describe('OldSchoolComponent', () => {
  let component: OldSchoolPage;
  let fixture: ComponentFixture<OldSchoolPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldSchoolPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
