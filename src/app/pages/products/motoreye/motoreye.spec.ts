import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motoreye } from './motoreye';

describe('Motoreye', () => {
  let component: Motoreye;
  let fixture: ComponentFixture<Motoreye>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motoreye],
    }).compileComponents();

    fixture = TestBed.createComponent(Motoreye);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
