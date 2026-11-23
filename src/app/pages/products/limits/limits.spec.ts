import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Limits } from './limits';

describe('Limits', () => {
  let component: Limits;
  let fixture: ComponentFixture<Limits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Limits],
    }).compileComponents();

    fixture = TestBed.createComponent(Limits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
