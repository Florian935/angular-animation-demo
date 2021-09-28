import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTriggerComponent } from './reusable-trigger.component';

describe('ReusableTriggerComponent', () => {
  let component: ReusableTriggerComponent;
  let fixture: ComponentFixture<ReusableTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
