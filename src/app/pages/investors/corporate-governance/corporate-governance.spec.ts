import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateGovernance } from './corporate-governance';

describe('CorporateGovernance', () => {
  let component: CorporateGovernance;
  let fixture: ComponentFixture<CorporateGovernance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateGovernance],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateGovernance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
