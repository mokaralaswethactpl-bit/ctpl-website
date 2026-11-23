import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranoPro } from './trano-pro';

describe('TranoPro', () => {
  let component: TranoPro;
  let fixture: ComponentFixture<TranoPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranoPro],
    }).compileComponents();

    fixture = TestBed.createComponent(TranoPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
