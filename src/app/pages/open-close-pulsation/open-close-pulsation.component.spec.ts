import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClosePulsationComponent } from './open-close-pulsation.component';

describe('OpenClosePulsationComponent', () => {
  let component: OpenClosePulsationComponent;
  let fixture: ComponentFixture<OpenClosePulsationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenClosePulsationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenClosePulsationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
