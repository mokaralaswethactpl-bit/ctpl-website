import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatStrip } from './stat-strip';

describe('StatStrip', () => {
  let component: StatStrip;
  let fixture: ComponentFixture<StatStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatStrip],
    }).compileComponents();

    fixture = TestBed.createComponent(StatStrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
