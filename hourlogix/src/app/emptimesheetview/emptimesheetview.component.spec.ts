import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptimesheetviewComponent } from './emptimesheetview.component';

describe('EmptimesheetviewComponent', () => {
  let component: EmptimesheetviewComponent;
  let fixture: ComponentFixture<EmptimesheetviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptimesheetviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptimesheetviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
