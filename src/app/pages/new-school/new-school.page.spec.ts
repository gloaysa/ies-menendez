import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchoolPage } from './new-school.page';

describe('NewSchoolComponent', () => {
  let component: NewSchoolPage;
  let fixture: ComponentFixture<NewSchoolPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSchoolPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
