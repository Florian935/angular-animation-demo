import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionWithBooleanComponent } from './transition-with-boolean.component';

describe('TransitionWithBooleanComponent', () => {
  let component: TransitionWithBooleanComponent;
  let fixture: ComponentFixture<TransitionWithBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionWithBooleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionWithBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
