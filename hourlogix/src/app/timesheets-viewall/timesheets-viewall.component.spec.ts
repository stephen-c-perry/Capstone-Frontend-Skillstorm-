import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetsViewallComponent } from './timesheets-viewall.component';

describe('TimesheetsViewallComponent', () => {
  let component: TimesheetsViewallComponent;
  let fixture: ComponentFixture<TimesheetsViewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesheetsViewallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetsViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
