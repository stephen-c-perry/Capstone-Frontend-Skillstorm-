import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOffComponent } from './timeoff.component';

describe('TimeoffComponent', () => {
  let component: TimeOffComponent;
  let fixture: ComponentFixture<TimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
