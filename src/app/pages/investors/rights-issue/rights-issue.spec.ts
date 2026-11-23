import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsIssue } from './rights-issue';

describe('RightsIssue', () => {
  let component: RightsIssue;
  let fixture: ComponentFixture<RightsIssue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightsIssue],
    }).compileComponents();

    fixture = TestBed.createComponent(RightsIssue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
