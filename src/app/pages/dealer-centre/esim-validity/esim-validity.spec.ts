import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsimValidity } from './esim-validity';

describe('EsimValidity', () => {
  let component: EsimValidity;
  let fixture: ComponentFixture<EsimValidity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsimValidity],
    }).compileComponents();

    fixture = TestBed.createComponent(EsimValidity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
