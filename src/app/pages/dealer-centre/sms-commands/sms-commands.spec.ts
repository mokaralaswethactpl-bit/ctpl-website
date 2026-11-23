import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCommands } from './sms-commands';

describe('SmsCommands', () => {
  let component: SmsCommands;
  let fixture: ComponentFixture<SmsCommands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsCommands],
    }).compileComponents();

    fixture = TestBed.createComponent(SmsCommands);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
