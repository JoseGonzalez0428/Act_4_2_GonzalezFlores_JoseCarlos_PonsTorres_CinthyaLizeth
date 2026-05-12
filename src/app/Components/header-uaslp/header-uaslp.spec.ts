import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUaslp } from './header-uaslp';

describe('HeaderUaslp', () => {
  let component: HeaderUaslp;
  let fixture: ComponentFixture<HeaderUaslp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUaslp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUaslp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
