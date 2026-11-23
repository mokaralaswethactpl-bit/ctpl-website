import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPresence } from './market-presence';

describe('MarketPresence', () => {
  let component: MarketPresence;
  let fixture: ComponentFixture<MarketPresence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketPresence],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketPresence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
