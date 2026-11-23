import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sld } from './sld';

describe('Sld', () => {
  let component: Sld;
  let fixture: ComponentFixture<Sld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sld],
    }).compileComponents();

    fixture = TestBed.createComponent(Sld);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
