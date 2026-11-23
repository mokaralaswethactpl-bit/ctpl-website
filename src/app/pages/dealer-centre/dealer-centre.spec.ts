import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCentre } from './dealer-centre';

describe('DealerCentre', () => {
  let component: DealerCentre;
  let fixture: ComponentFixture<DealerCentre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerCentre],
    }).compileComponents();

    fixture = TestBed.createComponent(DealerCentre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
