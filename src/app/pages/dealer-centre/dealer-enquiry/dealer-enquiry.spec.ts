import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerEnquiry } from './dealer-enquiry';

describe('DealerEnquiry', () => {
  let component: DealerEnquiry;
  let fixture: ComponentFixture<DealerEnquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerEnquiry],
    }).compileComponents();

    fixture = TestBed.createComponent(DealerEnquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
