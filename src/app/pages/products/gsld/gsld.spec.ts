import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gsld } from './gsld';

describe('Gsld', () => {
  let component: Gsld;
  let fixture: ComponentFixture<Gsld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gsld],
    }).compileComponents();

    fixture = TestBed.createComponent(Gsld);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
