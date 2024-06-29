import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTimeComponent } from './approve-time.component';

describe('ApproveTimeComponent', () => {
  let component: ApproveTimeComponent;
  let fixture: ComponentFixture<ApproveTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
