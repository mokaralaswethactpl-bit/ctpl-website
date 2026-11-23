import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsapButton } from './whatsap-button';

describe('WhatsapButton', () => {
  let component: WhatsapButton;
  let fixture: ComponentFixture<WhatsapButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsapButton],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsapButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
