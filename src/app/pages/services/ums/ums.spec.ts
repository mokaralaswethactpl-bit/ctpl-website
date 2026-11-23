import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ums } from './ums';

describe('Ums', () => {
  let component: Ums;
  let fixture: ComponentFixture<Ums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ums],
    }).compileComponents();

    fixture = TestBed.createComponent(Ums);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
