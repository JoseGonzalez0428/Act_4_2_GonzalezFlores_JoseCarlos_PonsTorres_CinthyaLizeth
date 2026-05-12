import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMateria } from './header-materia';

describe('HeaderMateria', () => {
  let component: HeaderMateria;
  let fixture: ComponentFixture<HeaderMateria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMateria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMateria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
