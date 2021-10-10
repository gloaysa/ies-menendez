import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodyTextComponent } from './bloody-text.component';

describe('BloodyTextComponent', () => {
  let component: BloodyTextComponent;
  let fixture: ComponentFixture<BloodyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodyTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
