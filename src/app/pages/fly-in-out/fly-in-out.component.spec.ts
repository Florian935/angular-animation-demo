import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyInOutComponent } from './fly-in-out.component';

describe('FlyInOutComponent', () => {
  let component: FlyInOutComponent;
  let fixture: ComponentFixture<FlyInOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyInOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
