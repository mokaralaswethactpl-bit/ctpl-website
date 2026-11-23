import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ais } from './ais';

describe('Ais', () => {
  let component: Ais;
  let fixture: ComponentFixture<Ais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ais],
    }).compileComponents();

    fixture = TestBed.createComponent(Ais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
