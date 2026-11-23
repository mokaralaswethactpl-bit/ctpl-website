import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialer } from './dialer';

describe('Dialer', () => {
  let component: Dialer;
  let fixture: ComponentFixture<Dialer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialer],
    }).compileComponents();

    fixture = TestBed.createComponent(Dialer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
