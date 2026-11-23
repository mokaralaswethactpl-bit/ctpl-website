import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shareholdings } from './shareholdings';

describe('Shareholdings', () => {
  let component: Shareholdings;
  let fixture: ComponentFixture<Shareholdings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shareholdings],
    }).compileComponents();

    fixture = TestBed.createComponent(Shareholdings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
