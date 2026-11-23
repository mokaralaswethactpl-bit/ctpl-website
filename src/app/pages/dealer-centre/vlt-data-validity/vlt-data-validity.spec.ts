import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltDataValidity } from './vlt-data-validity';

describe('VltDataValidity', () => {
  let component: VltDataValidity;
  let fixture: ComponentFixture<VltDataValidity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VltDataValidity],
    }).compileComponents();

    fixture = TestBed.createComponent(VltDataValidity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
