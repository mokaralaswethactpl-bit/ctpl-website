import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCentre } from './customer-centre';

describe('CustomerCentre', () => {
  let component: CustomerCentre;
  let fixture: ComponentFixture<CustomerCentre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCentre],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerCentre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
