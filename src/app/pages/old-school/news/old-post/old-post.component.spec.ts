import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPostComponent } from './old-post.component';

describe('OldPostComponent', () => {
  let component: OldPostComponent;
  let fixture: ComponentFixture<OldPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
