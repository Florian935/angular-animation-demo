import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementDecrementStaggerComponent } from './increment-decrement-stagger.component';

describe('IncrementDecrementStaggerComponent', () => {
  let component: IncrementDecrementStaggerComponent;
  let fixture: ComponentFixture<IncrementDecrementStaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementDecrementStaggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementDecrementStaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
