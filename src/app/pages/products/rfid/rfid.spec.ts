import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rfid } from './rfid';

describe('Rfid', () => {
  let component: Rfid;
  let fixture: ComponentFixture<Rfid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rfid],
    }).compileComponents();

    fixture = TestBed.createComponent(Rfid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
