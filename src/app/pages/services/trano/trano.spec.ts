import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trano } from './trano';

describe('Trano', () => {
  let component: Trano;
  let fixture: ComponentFixture<Trano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trano],
    }).compileComponents();

    fixture = TestBed.createComponent(Trano);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
