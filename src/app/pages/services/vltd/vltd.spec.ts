import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vltd } from './vltd';

describe('Vltd', () => {
  let component: Vltd;
  let fixture: ComponentFixture<Vltd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vltd],
    }).compileComponents();

    fixture = TestBed.createComponent(Vltd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
