import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterForm } from './matter-form';

describe('MatterForm', () => {
  let component: MatterForm;
  let fixture: ComponentFixture<MatterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatterForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
