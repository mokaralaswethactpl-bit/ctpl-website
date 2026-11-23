import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutStory } from './out-story';

describe('OutStory', () => {
  let component: OutStory;
  let fixture: ComponentFixture<OutStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutStory],
    }).compileComponents();

    fixture = TestBed.createComponent(OutStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
