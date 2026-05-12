import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUaslp } from './footer-uaslp';

describe('FooterUaslp', () => {
  let component: FooterUaslp;
  let fixture: ComponentFixture<FooterUaslp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterUaslp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterUaslp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
